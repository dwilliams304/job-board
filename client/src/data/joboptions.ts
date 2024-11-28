
/*
    This file is where most 'job options' can be found and acts as its source of truth.

    When creating a Job post, it will map each part of the JobOptions into their
    respective dropdowns. Many different components will use this, which is why
    it exists in its own file. It additionally allows for stronger typing!
*/

const locationOptions = ["On-Site", "Hybrid", "Remote"] as const;
const experienceOptions = ["Intern", "Entry-Level", "Mid-Level", "Senior", "Manager"] as const;
const termOptions = ["Full-Time", "Part-Time", "Contract"] as const;
const postAgeOptions = ["24 hrs", "7 days", "30 days", "90 days"] as const;


export const JobOptions = {
    locationOptions,
    experienceOptions,
    termOptions,
    postAgeOptions
}


export type JobOptionsType = {
    locationType: (typeof locationOptions)[number]
    experience: (typeof experienceOptions)[number]
    term: (typeof termOptions)[number]
    postAge?: (typeof postAgeOptions)[number]
}