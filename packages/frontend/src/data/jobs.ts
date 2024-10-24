import { Companies, Company } from './companies';

export type Job = {
    jobID: number; //6 digit number
    jobTitle: string;
    company: Company;
    experienceLevel: "Intern" | "Entry-Level" | "Mid-Level" | "Senior" | "Manager";
    location: string; //City & State, State, or Country
    onSite: "On-Site" | "Hybrid" | "Remote";
    salary: number; //Annualized yearly salaray
    averageHours: number; //Average hours worked per week
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
    jobTitle: "Default Job Title",
    company: Companies[0],
    experienceLevel: "Entry-Level",
    location: "Franklin, VA",
    onSite: "On-Site",
    salary: 9999,
    averageHours: 40,
    shortDescription: "Test"
}

export const Jobs: Job[] = [
    {
        jobID: 100001,
        jobTitle: "Frontend Developer",
        company: Companies[0],
        experienceLevel: "Mid-Level",
        location: "Austin, TX",
        onSite: "Hybrid",
        salary: 90000,
        averageHours: 40,
        shortDescription: "Seeking a passionate Frontend Developer with experience in React and JavaScript to join our dynamic team."
    },
    {
        jobID: 100002,
        jobTitle: "Data Analyst",
        company: Companies[1],
        experienceLevel: "Entry-Level",
        location: "New York, NY",
        onSite: "Remote",
        salary: 60000,
        averageHours: 40,
        shortDescription: "Join us as a Data Analyst to analyze large datasets and provide insights to drive business decisions."
    },
    {
        jobID: 100003,
        jobTitle: "Software Engineer",
        company: Companies[2],
        experienceLevel: "Senior",
        location: "San Francisco, CA",
        onSite: "On-Site",
        salary: 130000,
        averageHours: 40,
        shortDescription: "Looking for a Senior Software Engineer proficient in Java and cloud technologies to lead our development efforts."
    },
    {
        jobID: 100004,
        jobTitle: "DevOps Engineer",
        company: Companies[3],
        experienceLevel: "Mid-Level",
        location: "Seattle, WA",
        onSite: "Hybrid",
        salary: 110000,
        averageHours: 40,
        shortDescription: "Seeking a skilled DevOps Engineer with experience in CI/CD processes and containerization to enhance our infrastructure."
    },
    {
        jobID: 100005,
        jobTitle: "Product Manager",
        company: Companies[4],
        experienceLevel: "Manager",
        location: "Boston, MA",
        onSite: "On-Site",
        salary: 150000,
        averageHours: 40,
        shortDescription: "We are looking for an experienced Product Manager to drive product strategy and collaborate with engineering and design teams."
    },
    {
        jobID: 100006,
        jobTitle: "UX/UI Designer",
        company: Companies[5],
        experienceLevel: "Entry-Level",
        location: "Remote",
        onSite: "Remote",
        salary: 55000,
        averageHours: 40,
        shortDescription: "Join our creative team as a UX/UI Designer to help create engaging and user-friendly applications."
    },
    {
        jobID: 100007,
        jobTitle: "Backend Developer",
        company: Companies[6],
        experienceLevel: "Mid-Level",
        location: "Denver, CO",
        onSite: "On-Site",
        salary: 95000,
        averageHours: 40,
        shortDescription: "Looking for a Backend Developer with expertise in Node.js and database management to support our application development."
    },
    {
        jobID: 100008,
        jobTitle: "Mobile App Developer",
        company: Companies[7],
        experienceLevel: "Senior",
        location: "Miami, FL",
        onSite: "Hybrid",
        salary: 120000,
        averageHours: 40,
        shortDescription: "Seeking a Senior Mobile App Developer with a strong background in iOS and Android development to join our team."
    },
    {
        jobID: 100009,
        jobTitle: "QA Engineer",
        company: Companies[8],
        experienceLevel: "Mid-Level",
        location: "Chicago, IL",
        onSite: "Remote",
        salary: 85000,
        averageHours: 40,
        shortDescription: "Looking for a QA Engineer to develop and execute test plans, ensuring high-quality software delivery."
    },
    {
        jobID: 100010,
        jobTitle: "Cybersecurity Analyst",
        company: Companies[9],
        experienceLevel: "Mid-Level",
        location: "Washington, D.C.",
        onSite: "On-Site",
        salary: 100000,
        averageHours: 40,
        shortDescription: "Join our cybersecurity team to protect sensitive data and ensure compliance with industry standards."
    },
    {
        jobID: 100011,
        jobTitle: "Machine Learning Engineer",
        company: Companies[10],
        experienceLevel: "Mid-Level",
        location: "Los Angeles, CA",
        onSite: "Remote",
        salary: 115000,
        averageHours: 40,
        shortDescription: "Join our team as a Machine Learning Engineer to develop predictive models and enhance AI solutions."
    },
    {
        jobID: 100012,
        jobTitle: "Full Stack Developer",
        company: Companies[11],
        experienceLevel: "Senior",
        location: "Phoenix, AZ",
        onSite: "On-Site",
        salary: 125000,
        averageHours: 40,
        shortDescription: "Looking for a Full Stack Developer with strong skills in React and Node.js to lead project development."
    },
    {
        jobID: 100013,
        jobTitle: "Network Administrator",
        company: Companies[12],
        experienceLevel: "Mid-Level",
        location: "Dallas, TX",
        onSite: "Hybrid",
        salary: 80000,
        averageHours: 40,
        shortDescription: "Seeking a Network Administrator to maintain and secure our network infrastructure and support users."
    },
    {
        jobID: 100014,
        jobTitle: "Database Administrator",
        company: Companies[13],
        experienceLevel: "Mid-Level",
        location: "Atlanta, GA",
        onSite: "On-Site",
        salary: 90000,
        averageHours: 40,
        shortDescription: "Join our team as a Database Administrator to manage and optimize our database systems."
    },
    {
        jobID: 100015,
        jobTitle: "Cloud Solutions Architect",
        company: Companies[14],
        experienceLevel: "Senior",
        location: "Seattle, WA",
        onSite: "Hybrid",
        salary: 140000,
        averageHours: 40,
        shortDescription: "Looking for a Cloud Solutions Architect to design and implement scalable cloud infrastructures."
    },
    {
        jobID: 100016,
        jobTitle: "Technical Writer",
        company: Companies[15],
        experienceLevel: "Entry-Level",
        location: "Remote",
        onSite: "Remote",
        salary: 50000,
        averageHours: 40,
        shortDescription: "Seeking a Technical Writer to create and maintain documentation for software products."
    },
    {
        jobID: 100017,
        jobTitle: "Blockchain Developer",
        company: Companies[16],
        experienceLevel: "Mid-Level",
        location: "San Diego, CA",
        onSite: "On-Site",
        salary: 130000,
        averageHours: 40,
        shortDescription: "Join us as a Blockchain Developer to create decentralized applications and smart contracts."
    },
    {
        jobID: 100018,
        jobTitle: "Site Reliability Engineer",
        company: Companies[17],
        experienceLevel: "Senior",
        location: "Boston, MA",
        onSite: "Hybrid",
        salary: 125000,
        averageHours: 40,
        shortDescription: "Looking for a Site Reliability Engineer to improve system reliability and performance."
    },
    {
        jobID: 100019,
        jobTitle: "Salesforce Developer",
        company: Companies[18],
        experienceLevel: "Mid-Level",
        location: "Chicago, IL",
        onSite: "On-Site",
        salary: 110000,
        averageHours: 40,
        shortDescription: "Seeking a Salesforce Developer to customize and enhance our Salesforce platform."
    },
    {
        jobID: 100020,
        jobTitle: "Graphic Designer",
        company: Companies[19],
        experienceLevel: "Entry-Level",
        location: "Miami, FL",
        onSite: "Remote",
        salary: 55000,
        averageHours: 40,
        shortDescription: "Join our team as a Graphic Designer to create visually appealing designs for digital marketing."
    },
    {
        jobID: 100021,
        jobTitle: "Front-End Developer",
        company: Companies[19],
        experienceLevel: "Entry-Level",
        location: "Miami, FL",
        onSite: "Remote",
        salary: 55000,
        averageHours: 40,
        shortDescription: "Join our team as a Graphic Designer to create visually appealing designs for digital marketing."
    },
    {
        jobID: 100022,
        jobTitle: "UI/UX Designer",
        company: Companies[19],
        experienceLevel: "Entry-Level",
        location: "Miami, FL",
        onSite: "Hybrid",
        salary: 55000,
        averageHours: 40,
        shortDescription: "Join our team as a Graphic Designer to create visually appealing designs for digital marketing."
    }
    
]