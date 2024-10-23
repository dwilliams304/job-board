import { 
    useState,
    useEffect
} from "react";

import { 
    useParams 
} from "react-router-dom";

import { Job, FetchJob, Dev_DefaultJob } from "../../../data/jobs";
import { Companies } from "../../../data/companies";

import { 
    IoLocation, 
    IoCash, 
    IoBagSharp, 
    IoArrowForward, 
    IoStarSharp, 
    IoShareSocial 
} from "react-icons/io5";

import Button from "../../common/Button";



export default function JobPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [jobData, setJobData] = useState<Job>(Dev_DefaultJob);
    
    const { jobID } = useParams();

    let randomTimer = Math.floor(Math.random() * 4000);

    useEffect(() => {
        const job = FetchJob(Number(jobID));

        
        setJobData(job);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, randomTimer);


    }, [])

    if(isLoading) return (
        <div role="status" className="w-1/2 animate-pulse flex-grow px-20 mt-12 space-y-8">
        <h2 className="animate-pulse text-3xl text-center">Loading job details...</h2>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[550px]"></div>
        </div>
    )


    return (
        <div className="flex flex-col w-full flex-grow px-20 mt-12 space-y-8">
            {/* Post Details */}
            <div className="space-y-1 relative">
                <h2 className="text-3xl font-bold">{jobData.jobTitle}</h2>
                <div className="flex flex-row space-x-4">
                    <p className="flex align-middle"><IoArrowForward /> {jobData.experienceLevel}</p>
                    <p className="flex align-middle"><IoBagSharp /> Full-Time</p>
                    <p className="flex align-middle"><IoLocation /> {jobData.location} ({jobData.onSite})</p>
                    <p className="flex align-middle"><IoCash /> ${jobData.salary.toLocaleString()}/yr</p>
                </div>

                {/* Company Details */}
                <div className="flex flex-col border-b-2 border-black">
                    <div className="relative my-4 cursor-pointer"
                    onClick={() => window.open(`/company/${jobData.company.companyID}`)}>
                        <img 
                            src={jobData.company.companyLogo} 
                            alt="Company Logo" 
                            className=""
                        />
                        <h2 className="absolute bottom-0 left-10 text-lg">{jobData.company.companyName}</h2>
                    </div>
                    <a className="hover:underline cursor-pointer font-bold flex align-middle">
                        <IoStarSharp /> 4.53/5 (1.4k reviews)
                    </a>
                </div>
                <Button
                    type="Secondary"
                    text="Share Job"
                    icon={IoShareSocial}
                    function={() => {}}
                    style={{position: "absolute", right: "0", top: "0"}}
                />
            </div>

            {/* Job Description */}
            <div className="w-full px-12">
                <div className="space-y-4">
                    <div>
                        <h2 className="font-bold text-xl">About Us</h2>
                        <p>
                            Put something here that tells the potential employee about your company. Your values, what makes you different, etc... <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl">Qualifications</h2>
                        <p>While we don't expect all of the following, these would be nice to have:</p>
                        <ul className="list-disc px-12">
                            <li>4+ years of experience as a Support Engineer</li>
                            <li>Bachelor's Degree in Computer Science or related</li>
                            <li>Excellent written and verbal communication skills</li>
                            <li>Great understanding of Javascript, TypeScript, HTML, and CSS</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl">Job Responsibilities</h2>
                        <ul className="list-disc px-12">
                            <li>Job Responsibility #1</li>
                            <li>Job Responsibility #2</li>
                            <li>Job Responsibility #3</li>
                            <li>Job Responsibility #4</li>
                            <li>Job Responsibility #5</li>
                            <li>Job Responsibility #6</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl">Hiring Process</h2>
                        <p>
                            Potential employees love transparency! Tell them about how you do your hiring and the steps you take
                            to ensure you are finding the right candidate, etc...<br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl">Benefits</h2>
                        <p>
                            List something here that your company offers. 401ks, health insurance,
                            life insurance, etc... <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>

            {/* Apply, Report, Etc */}
            <div className="space-x-4">
                <Button
                    type="Primary"
                    text="Apply now"
                    function={() => {}}
                />
                <Button
                    type="Tertiary"
                    text="Report Job"
                    function={() => {}}
                />
            </div>
        </div>
    )
}