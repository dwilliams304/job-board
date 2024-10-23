import { useState } from "react";
import JobPost from "./JobPost";
import { Jobs } from "../../../data/jobs";
import SearchBar from "./SearchBar";
import FiltersPopup from "./FiltersPopup";

const searchOptions = {
    location: [
        "On-Site",
        "Hybrid",
        "Remote",
    ],
    experience: [
        "Intern",
        "Entry-Level",
        "Mid-Level",
        "Senior",
        "Manager"
    ],
    postAge: [
        "< 24 hrs",
        "< 7 days",
        "< 30 days"
    ]
}

export type SearchOptions = {
    location: string[]
    experience: string[]
    postAge: string[]
}

export type FilterPopupMenuState = {
    showFilterPopup: boolean
    setShowFilterPopup: (arg0: boolean) => void
}

export default function JobBoard(){
    const [showFilterPopup, setShowFilterPopup] = useState(false);

    return(
        <section>
            <SearchBar 
                filterPopupState={{
                    showFilterPopup,
                    setShowFilterPopup
                }}
                searchOptions={searchOptions}
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