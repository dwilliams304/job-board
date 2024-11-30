import { 
    useState,
    useEffect
} from "react";

import { 
    useParams,
    useNavigate,
    useSearchParams
} from "react-router-dom";

import { Job } from "../../../types/Jobs";

import { 
    IoLocation, 
    IoCash, 
    IoBagSharp, 
    IoArrowForward, 
    IoStarSharp, 
    IoShareSocial 
} from "react-icons/io5";

//Util functions
import { 
    ScrollToTop,
    SetTabTitle, 
    JobLocatingStringBuilder 
} from "../../../data/utils";

//Common Components
import { SkeletonLoader, Button } from "../../common";

//Page components
import ReportJob from "./ReportJob";
import Application from "./Application";
import JobDescription from "./JobDescription";

import axios from "axios";
import { apiURL } from "../../../data/constants";


const initialJobData: Job = {
    id: "",
    datePosted: new Date(),
    title: "Default Title",
    company: {
        id: "34",
        name: "Default Company",
        img: ""
    },
    location: {
        locationType: "Remote",
        country: "United States",

    },
    salary: 99999,
    experience: "Entry-Level",
    term: "Full-Time",
    shortDescription: "",
    employerQuestions: []
}


export default function JobPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [job, setJob] = useState<Job>(initialJobData);
    const [params, setSearchParams] = useSearchParams();

    const [showReportModal, setShowReportModal] = useState(false);
    
    const navTo = useNavigate();
    const { jobID } = useParams();


    useEffect(() => {
        // const job = FetchJob(Number(jobID));
        setIsLoading(true);
        ScrollToTop(true);
        axios.get(`${apiURL}/JobPost/${jobID}`)
            .then(res => {
                const jobDetails = res.data;
                setJob(jobDetails);
                SetTabTitle(`${jobDetails.title} | ${jobDetails.company.name}`);
            })
            .catch(err => {
                navTo('/not-found');
                SetTabTitle('Page Not Found!');
            })
            .finally(() => {
                setIsLoading(false);
            })

        // setJobData(job);


    }, [])

    if(isLoading) return <SkeletonLoader />


    return (
        <div className="flex flex-col w-full flex-grow md:px-20 px-2 md:pt-12 pt-4">
            {/* Post Details */}
            <div className="space-y-1 relative">
                <h2 className="text-3xl font-bold">{job.title}</h2>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <p className="flex align-middle"><IoArrowForward /> {job.experience}</p>
                    <p className="flex align-middle"><IoBagSharp /> {job.term}</p>
                    <p className="flex align-middle"><IoLocation /> 
                        {JobLocatingStringBuilder(job.location)}
                    </p>
                    <p className="flex align-middle"><IoCash /> ${job.salary.toLocaleString()}/yr</p>
                </div>

                {/* Company Details */}
                <div className="flex flex-col border-b-2 border-black">
                    <div className="relative my-4 cursor-pointer">
                        <img 
                            src={job.company.img} 
                            alt="Company Logo" 
                            className="w-10"
                            onClick={() => navTo(`/company/${job.company.id}`)}
                        />
                        <span className="absolute bottom-0 left-14 text-lg flex"
                        onClick={() => navTo(`/company/${job.company.id}`)}>
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
                    className="lg:absolute right-0 top-0"
                    disabled={false}
                />
            </div>

            <JobDescription 
            
            />

            <Application 
                questions={job.employerQuestions}
                setShowReportModal={setShowReportModal}
            />

            <ReportJob 
                showReportModal={showReportModal}
                setShowReportModal={setShowReportModal}
            />
        </div>
    )
}