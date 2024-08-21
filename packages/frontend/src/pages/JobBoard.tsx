import { useState } from "react";
import JobPost from "../components/JobPost";
import { data } from "../data/data";
import { SearchBar, FiltersPopup } from "../components";

export default function JobBoard(){
    const [showFilterPopup, useShowFilterPopup] = useState(false);

    return(
        <section>
            <SearchBar useShowFilterPopup={useShowFilterPopup} showFilterPopup={showFilterPopup} />
            <FiltersPopup useShowFilterPopup={useShowFilterPopup} showFilterPopup={showFilterPopup} />

            <p className="pl-2">Showing {data.length} results.</p>
            <div>
                {
                    data.map((job, i) => (
                        <JobPost job={job} key={i} />
                    ))
                }
            </div>
        </section>
    )
}