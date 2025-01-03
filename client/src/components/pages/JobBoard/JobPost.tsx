
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
import { Job } from "../../../types/Jobs";
import moment from "moment";
import {
    IoLocation,
    IoCash,
    IoBagSharp,
    IoArrowForward,
    
} from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { JobLocatingStringBuilder } from "../../../data/utils";

type JobPostProps = {
    job : Job
}

export default function JobPost({job}: JobPostProps){

    const postAge = moment(job.datePosted).fromNow();


    return(
        <div className="relative flex flex-col lg:flex-row border bg-slate-200 
        md:bg-white
        border-solid my-5 md:mx-8 p-5 shadow-md transition duration-300 ease-in-out
        cursor-pointer hover:shadow-xl hover:border-gray-400"
        onClick={() => window.open(`/job/${job.id}`)}>
            <div className="md:w-4/5 w-full space-y-2">
                <div className="flex align-middle">
                    <img 
                        src={job.company.img} 
                        alt="company logo" 
                        className="mr-2 border w-10"
                    />
                    <h2 className="font-semibold">
                        <span className="absoulte hover:underline" onClick={(e) => {
                        window.open(`/company/${job.company.id}`)
                        e.stopPropagation();
                        }}
                            >
                            {job.company.name}
                        </span> - 
                        <span> {job.title}</span>
                    </h2>
                </div>
                <div className="italic flex space-x-2">
                    <IoLocation />
                    <p> 
                        {JobLocatingStringBuilder(job.location)}
                    </p>
                </div>
                <p className="mt-4 pb-6 border-b-2 lg:border-none lg:pb-0">{job.shortDescription}</p>
            </div>

            <div className="lg:w-1/5 lg:pl-5 text-right lg:border-l-2 flex flex-col pt-6 lg:pt-0">
                    <p className="inline-flex space-x-2">
                        <FaClock/>
                        <span>{postAge}</span>
                    </p>
                    <p className="inline-flex space-x-2">
                        <IoArrowForward />
                        <span>{job.experience}</span>
                    </p>
                    <p className="inline-flex space-x-2">
                        <IoCash />
                        <span>Salary: ${job.salary.toLocaleString()}/yr</span>
                    </p>
                    <p className="inline-flex space-x-2">
                        <IoBagSharp />
                        <span>Term: {job.term}</span>
                    </p>
                    <Button
                        styleType="Primary"
                        className="lg:mt-4"
                        text="Apply Now! &rarr;"
                        function={(e) => {
                            window.open(`/job/${job.id}/#apply`);
                            e.stopPropagation();
                        }}
                        disabled={false}
                    />
            </div>
        </div>
    )
}