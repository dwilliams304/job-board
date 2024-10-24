import Button from "../../common/Button";
import { Job } from "../../../data/jobs";

type JobPostProps = {
    job : Job
}

export default function JobPost({job}: JobPostProps){

    const salary = Math.round((job.salary / 52 / job.averageHours) * 100) / 100;

    return(
        <div className="relative flex border border-solid my-5 mx-8 p-5 shadow-md transition duration-300 ease-in-out
        cursor-pointer hover:shadow-xl hover:border-gray-400"
        onClick={() => window.open(`/job/${job.jobID}`)}>
            <div className="w-4/5">
                <div className="flex align-middle">
                    <img 
                        src={job.company.companyLogo} 
                        alt="company logo" 
                        className="p-2 mr-2 border"
                    />
                    <h2 className="font-semibold">
                        <span className="absoulte hover:underline" onClick={(e) => {
                        window.open(`/company/${job.company.companyID}`)
                        e.stopPropagation();
                        }}
                            >
                            {job.company.companyName}
                        </span> - 
                        <span> {job.jobTitle}</span>
                    </h2>
                </div>
                <div className="italic flex space-x-2">
                    <p> 
                        {job.location}
                    </p>
                    <p>
                        ({job.onSite})
                    </p>
                </div>
                <p className="mt-4">{job.shortDescription}</p>
            </div>

            <div className="w-1/5 text-right border-l-2">
                <p>{job.experienceLevel}</p>
                <p>Salary: ${job.salary.toLocaleString()}/yr</p>
                <p>Avg. hrs./wk: {job.averageHours} {job.averageHours >=35 ? "(FT)" : "(PT)"}</p>
                <p>Hourly: ${salary}/hr</p>
                <Button
                    type="Primary"
                    text="Apply &rarr;"
                    function={(e) => {
                        window.open(`/job/${job.jobID}/apply`);
                        e.stopPropagation();
                    }}
                />
            </div>
        </div>
    )
}