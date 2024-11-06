
/*
    The JobBoard component is a page that will (by default) list recommended
    jobs to the user (assuming they are a job seeker)

    This will eventually support searching, filtering

    Currently, it takes in data from a file existing within the project
    to map out every job to a JobPost card
*/

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import JobPost from "./JobPost";
import { Jobs } from "../../../data/jobs";
import SearchBar from "./SearchBar";
import FiltersPopup from "./FiltersPopup";
import SetTabTitle from "../../../data/utils/SetTabTitle";



export type FilterPopupMenuState = {
    showFilterPopup: boolean
    setShowFilterPopup: (arg0: boolean) => void
}

export default function JobBoard(){
    const [showFilterPopup, setShowFilterPopup] = useState(false);
    const [jobsList, setJobsList] = useState(Jobs);
    const [searchParams, setSearchParams] = useSearchParams();

    const onSearchSubmit = (searchParams: any) => {
        // const {title, location, locationType, experience} = searchParams;
        setSearchParams(params => {
            for(let key in searchParams){
                params.set(`${key}`, searchParams[key]);
            }
            return params;
        })
    }

    SetTabTitle("Job Board");

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

            <p className="pl-2">Showing {jobsList.length} results.</p>
            <div>
                {
                    jobsList.map((job, i) => (
                        <JobPost job={job} key={i} />
                    ))
                }
            </div>
        </section>
    )
}