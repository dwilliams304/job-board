const locationOptions = ["On-Site", "Hybrid", "Remote"] as const;
const experienceOptions = ["Intern", "Entry-Level", "Mid-Level", "Senior", "Manager"] as const;
const termOptions = ["Full-Time", "Part-Time", "Contract"] as const;
const postAgeOptions = ["< 24 hrs", "< 7 days", "< 30 days"] as const;


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