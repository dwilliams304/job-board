import { LocationType } from "./Common";

export type Company = {
    id: string;
    name: string;
    img: string;
    jobPosts: ShortJobDetails[];
    reviews: Review[];
    about: string;
}
type ShortJobDetails = {
    id: string;
    title: string;
    location: LocationType;
}

export type Review = {
    id: string;
    title: string;
    reviewerName: string;
    jobTitle: string;
    currentEmployee: boolean;
    recommendsCompany: boolean;
    comments: string;
    datePosted: Date;
    jobSalary: number;
    scores: {
        averageScore: number;
        payScore: number;
        cultureScore: number;
        workLifeScore: number;
    }
}
