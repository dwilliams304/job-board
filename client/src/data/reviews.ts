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
            averageScore: 5,
            payScore: 5,
            cultureScore: 5,
            worklifeScore: 5
        }
    },
    
    {
        id: "x123",
        title: "Default title",
        reviewerName: "Anonymous",
        jobTitle: "Software Engineer I",
        currentEmployee: false,
        recommendsCompany: false,
        comments: "Default Comment!",
        datePosted: new Date(),
        jobSalary: 55000,
        scores: {
            averageScore: 4,
            payScore: 3,
            cultureScore: 5,
            worklifeScore: 4
        }
    },
    
    {
        id: "x123",
        title: "Default title",
        reviewerName: "Anonymous",
        jobTitle: "Software Engineer I",
        currentEmployee: false,
        recommendsCompany: false,
        comments: "Default Comment!",
        datePosted: new Date(),
        jobSalary: 65250,
        scores: {
            averageScore: 5,
            payScore: 5,
            cultureScore: 5,
            worklifeScore: 5
        }
    },

]