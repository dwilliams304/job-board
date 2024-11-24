import { 
    useState,
    useEffect
} from "react";

import { 
    useParams ,
    useNavigate
} from "react-router-dom";

import { Job } from "../../../data/types";

import { 
    IoLocation, 
    IoCash, 
    IoBagSharp, 
    IoArrowForward, 
    IoStarSharp, 
    IoShareSocial 
} from "react-icons/io5";

import { SkeletonLoader, Button } from "../../common";

import { GetRandomNumber } from "../../../data/utils";
import SetTabTitle from "../../../data/utils/SetTabTitle";
import axios from "axios";
import { apiURL } from "../../../data/constants";

const initialJobData: Job = {
    id: "",
    datePosted: new Date(),
    title: "",
    company: {
        id: "",
        name: "",
        img: ""
    },
    location: {
        locationType: "Remote",
        country: "United States",

    },
    salary: 0,
    experience: "",
    term: "",
    shortDescription: ""
}


export default function JobPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [job, setJob] = useState<Job>(initialJobData);
    
    const navTo = useNavigate();
    const { jobID } = useParams();


    useEffect(() => {
        // const job = FetchJob(Number(jobID));
        setIsLoading(true);
        axios.get(`${apiURL}/JobPost/${jobID}`)
            .then(res => {
                setJob(res.data);
            })
            .catch(err => {
                navTo('/not-found');
                SetTabTitle('Page Not Found!');
            })
            .finally(() => {
                setIsLoading(false);
            })
            SetTabTitle(`${job.title} | ${job.company.name}`);

        // setJobData(job);


    }, [])

    if(isLoading) return <SkeletonLoader />


    return (
        <div className="flex flex-col w-full flex-grow px-20 mt-12 space-y-8">
            {/* Post Details */}
            <div className="space-y-1 relative">
                <h2 className="text-3xl font-bold">{job.title}</h2>
                <div className="flex flex-row space-x-4">
                    <p className="flex align-middle"><IoArrowForward /> {job.experience}</p>
                    <p className="flex align-middle"><IoBagSharp /> {job.term}</p>
                    <p className="flex align-middle"><IoLocation /> 
                        {
                            job.location.city && job.location.state ?
                                `${job.location.city}, ${job.location.state} - ${job.location.country} `
                                :
                                `${job.location.country} `
                        }
                        ({job.location.locationType})
                    </p>
                    <p className="flex align-middle"><IoCash /> ${job.salary.toLocaleString()}/yr</p>
                </div>

                {/* Company Details */}
                <div className="flex flex-col border-b-2 border-black">
                    <div className="relative my-4 cursor-pointer"
                    onClick={() => navTo(`/company/${job.company.id}`)}>
                        <img 
                            src={job.company.img} 
                            alt="Company Logo" 
                            className="w-14 h-14"
                        />
                        <span className="absolute bottom-0 left-14 text-lg flex">
                            <p className="pr-2">posted by: </p> 
                            <h2 className="font-bold hover:underline"> {job.company.name}</h2>
                        </span>
                    </div>
                    {/* <a className="hover:underline cursor-pointer font-bold flex align-middle">
                        <IoStarSharp /> {jobData.company.reviews}
                    </a> */}
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