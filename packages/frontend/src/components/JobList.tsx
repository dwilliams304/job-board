import JobPost from "./common/JobPost";
import { data } from "../data/data";

export default function JobList(){
    return(
        <section>
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