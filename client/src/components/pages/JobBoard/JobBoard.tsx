
/*
    The JobBoard component is a page that will (by default) list recommended
    jobs to the user (assuming they are a job seeker)

    This will eventually support searching, filtering

    Currently, it takes in data from a file existing within the project
    to map out every job to a JobPost card
*/

import { useState } from "react";
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

    SetTabTitle("Job Board");

    return(
        <section>
            <SearchBar 
                filterPopupState={{
                    showFilterPopup,
                    setShowFilterPopup
                }}
            />
            <FiltersPopup 
                showFilterPopup={showFilterPopup}
                setShowFilterPopup={setShowFilterPopup}
            />

            <p className="pl-2">Showing {Jobs.length} results.</p>
            <div>
                {
                    Jobs.map((job, i) => (
                        <JobPost job={job} key={i} />
                    ))
                }
            </div>
        </section>
    )
}