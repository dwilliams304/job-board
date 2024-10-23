import { AppleLogo, BMWLogo, FacebookLogo, GoogleLogo, McdonaldsLogo, SoundcloudLogo } from '../assets/testlogos';

export type Job = {
    jobID: number;
    jobTitle: string;
    companyName: string;
    companyLogo: string;
    level: string;
    location: string,
    onSite: "On-Site" | "Hybrid" | "Remote"
    salary: number
    averageHours: number
    shortDescription: string
}

export function FetchJob(_jobID: number): Job {
    let val: Job = Jobs[0];
    for(let i = 0; i < Jobs.length; i++){
        if(Jobs[i].jobID === _jobID){
            val = Jobs[i];
            break;
        }
    }
    return val;
}

export const Jobs: Job[] = [
    {
        jobID: 498,
        jobTitle: "Frontend Engineer",
        companyName: "Jon Doe, Inc.",
        companyLogo: AppleLogo,
        level: "Junior - Intermediate",
        location: "Salt Lake City, UT",
        onSite: "On-Site",
        salary: 50000,
        averageHours: 40,
        shortDescription: "The frontend engineer will engineer things in the frontend when things in the frontend need engineered."
    },
    {
        jobID: 430,
        jobTitle: "Fullstack Engineer",
        companyName: "Doofenshmirtz Evil, Inc.",
        companyLogo: BMWLogo,
        level: "Junior - Intermediate",
        location: "San Francisco, CA",
        onSite: "Remote",
        salary: 62500,
        averageHours: 40,
        shortDescription: "You will craft the evil website 900inator frontend and backend."
    },
    {
        jobID: 200,
        jobTitle: "Technical Support Engineer",
        companyName: "Doofenshmirtz Evil, Inc.",
        companyLogo: BMWLogo,
        level: "Lead",
        location: "Chicago, IL",
        onSite: "Hybrid",
        salary: 120000,
        averageHours: 40,
        shortDescription: "The Technical Support Engineer will provide excellent customer service and troubleshoot issues with customerinators."
    },
    {
        jobID: 986,
        jobTitle: "Web Developer",
        companyName: "Kim's Convenience",
        companyLogo: GoogleLogo,
        level: "Intermediate - Senior",
        location: "United States",
        onSite: "Remote",
        salary: 95250,
        averageHours: 40,
        shortDescription: "As a web developer, you will craft an amazing user experience to drive more traffic and sales."
    },
    {
        jobID: 120,
        jobTitle: "Technical Support Engineer",
        companyName: "Fakebook",
        companyLogo: FacebookLogo,
        level: "Intermediate - Senior",
        location: "United States",
        onSite: "Remote",
        salary: 85000,
        averageHours: 40,
        shortDescription: "Our client Fakebook needs a Technical Support Engineer to help customers troubleshoot common issues. Must be strong in debugging."
    },
    {
        jobID: 208,
        jobTitle: "Backend Engineer",
        companyName: "SQueueL",
        companyLogo: McdonaldsLogo,
        level: "Intermediate - Senior",
        location: "United States",
        onSite: "Remote",
        salary: 127500,
        averageHours: 45,
        shortDescription: "The Backend Engineer will work and communicate with the frontend team. And will engineer the backend, as a backend engineer would do."
    },
    {
        jobID: 766,
        jobTitle: "Deployed Engineer",
        companyName: "MikeSpace",
        companyLogo: SoundcloudLogo,
        level: "Intermediate - Senior",
        location: "United States",
        onSite: "Remote",
        salary: 73000,
        averageHours: 40,
        shortDescription: "Deployed Engineers will commonly be engineering as they are deployed."
    },
]