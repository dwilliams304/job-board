
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
// import { Jobs } from "../../../data/jobs";
import SearchBar from "./SearchBar";
import FiltersPopup from "./FiltersPopup";
import SetTabTitle from "../../../data/utils/SetTabTitle";
import { SkeletonLoader } from "../../common";

import { GetRandomNumber } from "../../../data/utils";
import { apiURL } from "../../../data/constants";
import axios from "axios";


export type FilterPopupMenuState = {
    showFilterPopup: boolean
    setShowFilterPopup: (arg0: boolean) => void
}


export default function JobBoard(){
    const [showFilterPopup, setShowFilterPopup] = useState(false);
    const [jobsList, setJobsList] = useState([]);
    const [filteredList, setFilteredList] = useState(jobsList);
    const [jobsAreLoading, setJobsAreLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    // const [listCount, setListCount] = useState(Jobs.length);




    const onSearchSubmit = (searchParams: any) => {
        // const {title, location, locationType, experience} = searchParams;
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
    }, [])

    // useEffect(() => {
    //     setListCount(filteredList.length);
    // }, [filteredList])

    useEffect(() => {
        setJobsAreLoading(true);
        const jobTitle = searchParams.get("title");
        const location = searchParams.get("location");
        const experience = searchParams.get("experience");
        const locationType = searchParams.get("locationType");
        const postAge = searchParams.get("postAge");
        setFilteredList(jobsList);
        console.log(searchParams);

        setJobsAreLoading(false);
    }, [searchParams])


    return(
        <section>
            <SearchBar 
                filterPopupState={{
                    showFilterPopup,
                    setShowFilterPopup
                }}
                onSearchSubmit={onSearchSubmit}
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
                        jobsList.length === 0 ?
                        <div>
                            <h2>We couldn't find any matching jobs!</h2>
                        </div>
                        :
                        jobsList.map((job, i) => (
                            <JobPost job={job} key={i} />
                        ))
                    }
                </div>
            }
        </section>
    )
}