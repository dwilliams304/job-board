import JobPost from "./common/JobPost";
import { data } from "../data/data";

export default function JobList(){
    return(
        <section>
            <p>Showing {data.length} results.</p>
            <div>
                {
                    data.map((job: object, i: number) => {
                        return <JobPost job={job} key={i} />
                    })
                }
            </div>
        </section>
    )
}