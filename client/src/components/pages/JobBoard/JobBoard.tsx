
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
import { Jobs } from "../../../data/jobs";
import SearchBar from "./SearchBar";
import FiltersPopup from "./FiltersPopup";
import SetTabTitle from "../../../data/utils/SetTabTitle";
import { SkeletonLoader } from "../../common";

import { GetRandomNumber } from "../../../data/utils";


export type FilterPopupMenuState = {
    showFilterPopup: boolean
    setShowFilterPopup: (arg0: boolean) => void
}


export default function JobBoard(){
    const [showFilterPopup, setShowFilterPopup] = useState(false);
    const [jobsList, setJobsList] = useState(Jobs);
    const [filteredList, setFilteredList] = useState(jobsList);
    const [jobsAreLoading, setJobsAreLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const [listCount, setListCount] = useState(Jobs.length);




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
        setFilteredList(Jobs);
        setJobsAreLoading(false);
        SetTabTitle("Job Board");
    }, [])

    useEffect(() => {
        setListCount(filteredList.length);
    }, [filteredList])

    useEffect(() => {
        setJobsAreLoading(true);
        const jobTitle = searchParams.get("title");
        const location = searchParams.get("location");
        const experience = searchParams.get("experience");
        const locationType = searchParams.get("locationType");
        const postAge = searchParams.get("postAge");
        setFilteredList(jobsList);

        // if(jobTitle){
        //     setFilteredList(filteredList.filter(job => {
        //         if(job.jobTitle.toLowerCase().includes(jobTitle.toLowerCase())) return job;
        //     }))
        // }
        // if(location){
        //     setFilteredList(filteredList.filter(job => {
        //         if(job.location.toLowerCase().includes(location.toLowerCase())) return job;
        //     }))
        // }
        // if(experience){
        //     setFilteredList(filteredList.filter(job => {
        //         if(job.jobOptions.experience.toLowerCase().includes(experience.toLowerCase())) return job;
        //     }))
        // }
        if(locationType){
            setFilteredList(jobsList.filter(job => {
                if(job.jobOptions.locationType === locationType) return job;
            }))
        }
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
            <FiltersPopup 
                showFilterPopup={showFilterPopup}
                setShowFilterPopup={setShowFilterPopup}
            />

            <p className="pl-2">Showing {listCount} results.</p>
            {
                jobsAreLoading ?
                <div className="flex-grow text-center">
                    <SkeletonLoader />
                </div>
                :
                <div>
                    {
                        filteredList.map((job, i) => (
                            <JobPost job={job} key={i} />
                        ))
                    }
                </div>
            }
        </section>
    )
}