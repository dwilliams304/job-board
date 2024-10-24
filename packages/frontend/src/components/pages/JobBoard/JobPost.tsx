
/*
    The JobPost component is a card of data that displays a job
    These will be listed on the JobBoard page

    JobPosts will take a prop 'job' of type Job which will
    hold the proper information to dynamically display job data

    This will list the following
    -Company Name & Logo of job poster
    -Job Title
    -Location & if it is remote, hybrid, or on-site
    -A brief description of the job
    -Job details
        -i.e: salary, experience level, job term, etc...

    Users can click on the Company name directly which will redirect them to the
    CompanyPage

    Users can click on the JobPost card which will redirect them to the JobPage
    which details the jobdescription

    Users can additionally click on the 'Apply' button which will take them 
    directly to the job's application.
        -This will likely be allowable/disallowable from the job poster
*/

import Button from "../../common/Button";
import { Job } from "../../../data/jobs";

type JobPostProps = {
    job : Job
}

export default function JobPost({job}: JobPostProps){


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
                <p>Term: {job.jobTerm}</p>
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