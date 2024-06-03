import JobPost from "../components/JobPost";
import { data } from "../data/data";
import { SearchBar } from "../components";

export default function JobBoard(){
    return(
        <section>
            <SearchBar />

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