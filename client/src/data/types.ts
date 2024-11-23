type Location = {
    streetAddress?: string;
    streetAddressTwo?: string;
    city?: string;
    postalCode?: string;
    state?: string;
    country: string;
    locationType: "On-Site" | "Hybrid" | "Remote"
}

export type Job = {
    id: string;
    datePosted: Date;
    title: string;
    company: ShortCompanyDetails;    
    location: Location;
    salary: number; //Annualized yearly salaray
    experience: string;
    term: string;
    locationType: string;
    shortDescription: string;
}
type ShortCompanyDetails = {
    id: string;
    name: string;
    img: string;
}


export type Company = {
    id: string;
    name: string;
    img: string;
    jobPosts: ShortJobDetails[];
    reviews: Review[];
}
type ShortJobDetails = {
    id: string;
    title: string;
    location: Location;
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
