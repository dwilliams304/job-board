export type Job = {
    id: string;
    datePosted: Date;
    title: string;
    company: ShortCompanyDetails;    
    location: string; //City & State, State, or Country
    salary: number; //Annualized yearly salaray
    experience: string;
    term: string;
    locationType: string;
    shortDescription: string;
}

export type Company = {
    id: string;
    name: string;
    img: string;
    jobPosts: ShortJobDetails[];
}

export type Review = {
    id: string;
    payScore: number;
    cultureScore: number;
    worklifeScore: number;
    averageScore: number;
    title: string;
    jobTitle: string;
    reviewerName: string;
    comments: string;
    reccomendsCompany: boolean;
}

type ShortCompanyDetails = {
    id: string;
    name: string;
    img: string;
}

type ShortJobDetails = {
    id: string;
    title: string;
    location: string;
    locationType: string;
}