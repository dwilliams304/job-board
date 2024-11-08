
/*
    This file contains all mock data for the jobs in the jobboard.

    This currently has a few mock database fetching functions that
    returns different things. 

    FetchJobsByCompanyID does as it sounds.
        This function will take the companyID as an arg (taken from the
        URL) and will return any Job that has the Company's ID tied to it.
        This returns an array of type Job
    
    FetchJob returns a single Job
        This is primarily used for the JobPage component.
        We use this as a mock function to acquire all the data tied to a specific
        jobID found within the urlParams.
    
    Both of these functions just currently do a very linear search
        -Starting from index 0 -> going to the end of the array
    When the database grows larger and larger, two things will need to change
        1. How Jobs are stored in the database
            -We are currently just pushing them into an array of jobs
            with no sorting at all, this will become very hard when the
            database groes extremely long. Imagine tens of thousands of
            different posts, all stored with NO sorting

        2. How Jobs are being fetched in their fetching functions
            -When this database gets extremely large (imagine 10,000+), we
            are searching from 0 -> end. This will become an extremely long
            process, especially when the job we are searching for is near
            the end of the array. We have to wait ALL the way until we reach it
    
    We could resolve these issues in a few ways.
        -First we want to sort these jobs every time they are saved into the database
        -Then when searching, we would likely rather use a better search algo
    
    More than likely, we will just implement a basic Binary Tree and use Binary Search
    There is probably something that could save time and be more efficient, but for
    just a little personal project, something simmple like that will do just fine.
*/

import { Companies, Company } from './companies';
import { JobOptionsType } from './joboptions';

export type Job = {
    jobID: number; //6 digit number
    datePosted: Date;
    jobTitle: string;
    company: Company;    
    location: string; //City & State, State, or Country
    salary: number; //Annualized yearly salaray
    jobOptions: JobOptionsType;
    shortDescription: string;
}

export function FetchJobsByCompanyID(_companyID: number): Job[] {
    let val: Job[] = [];
    for(let i = 0; i < Jobs.length; i++){
        var job = Jobs[i];
        if(job.company.companyID === _companyID) val.push(job);
    }
    return val;
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

export const Dev_DefaultJob: Job = {
    jobID: 111,
    datePosted: new Date('October 17, 2024 11:24:00'),
    jobTitle: "Default Job Title",
    company: Companies[0],
    location: "Franklin, VA",
    salary: 9999,
    jobOptions: {
        experience: "Entry-Level",
        locationType: "On-Site",
        term: "Full-Time"
    },
    shortDescription: "Test",
}

export const Jobs: Job[] = [
    {
        jobID: 100001,
        datePosted: new Date('October 24, 2024 10:24:00'),
        jobTitle: "Frontend Developer",
        company: Companies[0],
        location: "Austin, TX",
        salary: 90000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Seeking a passionate Frontend Developer with experience in React and JavaScript to join our dynamic team."
    },
    {
        jobID: 100002,
        datePosted: new Date('October 31, 2024 09:30:00'),
        jobTitle: "Data Analyst",
        company: Companies[1],
        location: "New York, NY",
        salary: 60000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "Remote",
            term: "Full-Time"
        },
        shortDescription: "Join us as a Data Analyst to analyze large datasets and provide insights to drive business decisions."
    },
    {
        jobID: 100003,
        datePosted: new Date('October 30, 2024 09:24:00'),
        jobTitle: "Software Engineer",
        company: Companies[2],
        location: "San Francisco, CA",
        salary: 130000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Looking for a Senior Software Engineer proficient in Java and cloud technologies to lead our development efforts."
    },
    {
        jobID: 100004,
        datePosted: new Date('November 1, 2024 12:24:00'),
        jobTitle: "DevOps Engineer",
        company: Companies[3],
        location: "Seattle, WA",
        salary: 110000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Seeking a skilled DevOps Engineer with experience in CI/CD processes and containerization to enhance our infrastructure."
    },
    {
        jobID: 100005,
        datePosted: new Date('October 17, 2024 16:20:00'),
        jobTitle: "Product Manager",
        company: Companies[4],
        location: "Boston, MA",
        salary: 150000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "Remote",
            term: "Full-Time"
        },
        shortDescription: "We are looking for an experienced Product Manager to drive product strategy and collaborate with engineering and design teams."
    },
    {
        jobID: 100006,
        datePosted: new Date('October 1, 2024 13:24:00'),
        jobTitle: "UX/UI Designer",
        company: Companies[5],
        location: "Remote",
        salary: 55000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "Remote",
            term: "Full-Time"
        },
        shortDescription: "Join our creative team as a UX/UI Designer to help create engaging and user-friendly applications."
    },
    {
        jobID: 100007,
        datePosted: new Date('October 11, 2024 13:11:00'),
        jobTitle: "Backend Developer",
        company: Companies[6],
        location: "Denver, CO",
        salary: 95000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "Hybrid",
            term: "Full-Time"
        },
        shortDescription: "Looking for a Backend Developer with expertise in Node.js and database management to support our application development."
    },
    {
        jobID: 100008,
        datePosted: new Date('October 28, 2024 13:00:00'),
        jobTitle: "Mobile App Developer",
        company: Companies[7],
        location: "Miami, FL",
        salary: 120000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "Hybrid",
            term: "Full-Time"
        },
        shortDescription: "Seeking a Senior Mobile App Developer with a strong background in iOS and Android development to join our team."
    },
    {
        jobID: 100009,
        datePosted: new Date('October 27, 2024 12:05:00'),
        jobTitle: "QA Engineer",
        company: Companies[8],
        location: "Chicago, IL",
        salary: 85000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Looking for a QA Engineer to develop and execute test plans, ensuring high-quality software delivery."
    },
    {
        jobID: 100010,
        datePosted: new Date('October 30, 2024 13:13:13'),
        jobTitle: "Cybersecurity Analyst",
        company: Companies[9],
        location: "Washington, D.C.",
        salary: 100000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Join our cybersecurity team to protect sensitive data and ensure compliance with industry standards."
    },
    {
        jobID: 100011,
        datePosted: new Date('October 31, 2024 12:24:00'),
        jobTitle: "Machine Learning Engineer",
        company: Companies[10],
        location: "Los Angeles, CA",
        salary: 115000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Join our team as a Machine Learning Engineer to develop predictive models and enhance AI solutions."
    },
    {
        jobID: 100012,
        datePosted: new Date('November 1, 2024 13:22:00'),
        jobTitle: "Full Stack Developer",
        company: Companies[11],
        location: "Phoenix, AZ",
        salary: 125000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Looking for a Full Stack Developer with strong skills in React and Node.js to lead project development."
    },
    {
        jobID: 100013,
        datePosted: new Date('November 1, 2024 14:24:00'),
        jobTitle: "Network Administrator",
        company: Companies[12],
        location: "Dallas, TX",
        salary: 80000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Seeking a Network Administrator to maintain and secure our network infrastructure and support users."
    },
    {
        jobID: 100014,
        datePosted: new Date('September 17, 2024 19:24:00'),
        jobTitle: "Database Administrator",
        company: Companies[13],
        location: "Atlanta, GA",
        salary: 90000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Join our team as a Database Administrator to manage and optimize our database systems."
    },
    {
        jobID: 100015,
        datePosted: new Date('September 30, 2024 12:24:00'),
        jobTitle: "Cloud Solutions Architect",
        company: Companies[14],
        location: "Seattle, WA",
        salary: 140000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Looking for a Cloud Solutions Architect to design and implement scalable cloud infrastructures."
    },
    {
        jobID: 100016,
        datePosted: new Date('June 1, 2024 12:24:00'),
        jobTitle: "Technical Writer",
        company: Companies[15],
        location: "Remote",
        salary: 50000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Seeking a Technical Writer to create and maintain documentation for software products."
    },
    {
        jobID: 100017,
        datePosted: new Date('October 19, 2024 14:24:00'),
        jobTitle: "Blockchain Developer",
        company: Companies[16],
        location: "San Diego, CA",
        salary: 130000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Join us as a Blockchain Developer to create decentralized applications and smart contracts."
    },
    {
        jobID: 100018,
        datePosted: new Date('October 5, 2024 16:24:00'),
        jobTitle: "Site Reliability Engineer",
        company: Companies[17],
        location: "Boston, MA",
        salary: 125000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Looking for a Site Reliability Engineer to improve system reliability and performance."
    },
    {
        jobID: 100019,
        datePosted: new Date('October 2, 2024 19:24:00'),
        jobTitle: "Salesforce Developer",
        company: Companies[18],
        location: "Chicago, IL",
        salary: 110000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Seeking a Salesforce Developer to customize and enhance our Salesforce platform."
    },
    {
        jobID: 100020,
        datePosted: new Date('June 1, 2023 12:24:00'),
        jobTitle: "Graphic Designer",
        company: Companies[19],
        location: "Miami, FL",
        salary: 55000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Join our team as a Graphic Designer to create visually appealing designs for digital marketing."
    },
    {
        jobID: 100021,
        datePosted: new Date('October 21, 2024 13:24:00'),
        jobTitle: "Front-End Developer",
        company: Companies[19],
        location: "Miami, FL",
        salary: 70000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Join our team as a Front-End Developer to develop things on the front-end."
    },
    {
        jobID: 100022,
        datePosted: new Date('October 17, 2024 03:24:00'),
        jobTitle: "UI/UX Designer",
        company: Companies[19],
        location: "Miami, FL",
        salary: 65000,
        jobOptions: {
            experience: "Entry-Level",
            locationType: "On-Site",
            term: "Full-Time"
        },
        shortDescription: "Join our team as a UI/UX Designer to help us make working UI that isn't bad."
    }
    
]