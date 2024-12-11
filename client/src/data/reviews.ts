import { Review } from "../types/Companies";

export const Reviews: Review[] = [
    {
        id: "x123",
        title: "Default title",
        reviewerName: "Anonymous",
        jobTitle: "Software Engineer I",
        currentEmployee: false,
        recommendsCompany: false,
        comments: "Default Comment!",
        datePosted: new Date(),
        jobSalary: 75000,
        scores: {
            averageScore: 5.0,
            payScore: 5,
            cultureScore: 5,
            workLifeScore: 5
        }
    },
    
    {
        id: "x124",
        title: "Default title",
        reviewerName: "Anonymous",
        jobTitle: "Software Engineer I",
        currentEmployee: false,
        recommendsCompany: false,
        comments: "Default Comment!",
        datePosted: new Date(),
        jobSalary: 55000,
        scores: {
            averageScore: 4.0,
            payScore: 3,
            cultureScore: 5,
            workLifeScore: 4
        }
    },
    
    {
        id: "x125",
        title: "Default title",
        reviewerName: "Anonymous",
        jobTitle: "Software Engineer I",
        currentEmployee: false,
        recommendsCompany: false,
        comments: "Default Comment!",
        datePosted: new Date(),
        jobSalary: 65250,
        scores: {
            averageScore: 4.5,
            payScore: 5,
            cultureScore: 4,
            workLifeScore: 4
        }
    },

]