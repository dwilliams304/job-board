
/*
    The JobBoard component is a page that will (by default) list recommended
    jobs to the user (assuming they are a job seeker)

    This will eventually support searching, filtering

    Currently, it takes in data from a file existing within the project
    to map out every job to a JobPost card
*/

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import JobPost from "./JobPost";
import SearchBar from "./SearchBar";
import FiltersPopup from "./FiltersPopup";
import { SetTabTitle } from "../../../data/utils/";
import { SkeletonLoader } from "../../common";

import { apiURL, testURL } from "../../../data/constants";
import axios from "axios";


export type FilterPopupMenuState = {
    showFilterPopup: boolean
    setShowFilterPopup: (arg0: boolean) => void
}


export default function JobBoard(){
    const [showFilterPopup, setShowFilterPopup] = useState(false);
    const [jobsList, setJobsList] = useState([]);
    const [jobsAreLoading, setJobsAreLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();





    const onSearchSubmit = (searchParams: any) => {
        setSearchParams(params => {
            for(let key in searchParams){
                if(searchParams[key] !== "" && searchParams[key] !== "Any"){
                    params.set(`${key}`, searchParams[key]);
                }
                else{
                    params.delete(key);
                }
            }
            return params;
        })
    }

    useEffect(() => {
        setJobsAreLoading(true);
        SetTabTitle("Job Board");
        axios.get(`${apiURL}/JobPost`)
            .then(res => {
                setJobsList(res.data)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setJobsAreLoading(false);
            })

        return () => setJobsAreLoading(false);
    }, [])


    useEffect(() => {
        setJobsAreLoading(true);
        
        let filtersString = "";

        for(let [key, value] of searchParams.entries()){
            filtersString += `${key}=${value}&`
        }

        axios.get(`${apiURL}/JobPost/filterBy?${filtersString}`)
            .then(res => {
                setJobsList(res.data);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setJobsAreLoading(false);
            });

        return () => setJobsAreLoading(false);

    }, [searchParams])


    return(
        <section>
            <SearchBar 
                filterPopupState={{
                    showFilterPopup,
                    setShowFilterPopup
                }}
                onSearchSubmit={onSearchSubmit}
                jobsAreLoading={jobsAreLoading}
            />
            {/* <FiltersPopup 
                showFilterPopup={showFilterPopup}
                setShowFilterPopup={setShowFilterPopup}
            /> */}

            {/* <p className="pl-2">Showing {listCount} results.</p> */}
            {
                jobsAreLoading ?
                <div className="flex-grow text-center">
                    <SkeletonLoader />
                </div>
                :
                <div>
                    {
                        jobsList.map((job, i) => (
                            <JobPost job={job} key={i} />
                        ))
                    }
                </div>
            }
        </section>
    )
}