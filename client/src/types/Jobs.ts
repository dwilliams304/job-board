import { LocationType } from "./Common";

export type Job = {
    id: string;
    datePosted: Date;
    title: string;
    company: ShortCompanyDetails;    
    location: LocationType;
    salary: number; //Annualized yearly salaray
    experience: string;
    term: string;
    shortDescription: string;
    employerQuestions: ApplicationQuestion[];
}
type ShortCompanyDetails = {
    id: string;
    name: string;
    img: string;
}


export type ApplicationQuestion = {
    question: string;
    required: boolean;
    type?: "text" | "multi"
    options?: string[];
}