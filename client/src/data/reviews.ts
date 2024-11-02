export type Review = {
    reviewID: number;
    reviewTitle: string;
    payScore: number;
    cultureScore: number;
    worklifeScore: number;
    comments: string;
    jobTitle: string;
    commenterName: string;
}

type CompanyReview = {
    companyID: number;
    reviews: Review[];
}

export const FetchCompanyReviews = (_companyID: number): Review[] => {
    let reviews: Review[] = [];

    for(let i = 0; i < companyReviews.length; i++){
        var cur = companyReviews[i];

        if(cur.companyID === _companyID){
            reviews = cur.reviews;
        }
    }


    return reviews;
}



const companyReviews: CompanyReview[] = [
    {
        companyID: 100001,
        reviews: [
            {
                reviewTitle: "Review Title",
                reviewID: 12,
                payScore: 5,
                cultureScore: 5,
                worklifeScore: 5,
                comments: "This is a basic comment",
                jobTitle: "Software Engineer I",
                commenterName: "Rick James"
            },
            {
                reviewTitle: "Review Title",
                reviewID: 14,
                payScore: 3,
                cultureScore: 5,
                worklifeScore: 5,
                comments: "This is a basic comment",
                jobTitle: "Software Engineer I",
                commenterName: "Rick James"
            },
            {
                reviewTitle: "Review Title",
                reviewID: 16,
                payScore: 3,
                cultureScore: 4,
                worklifeScore: 5,
                comments: "This is a basic comment",
                jobTitle: "Software Engineer I",
                commenterName: "Rick James"
            },
            {
                reviewTitle: "Review Title",
                reviewID: 17,
                payScore: 4,
                cultureScore: 3,
                worklifeScore: 4,
                comments: "This is a basic comment",
                jobTitle: "Software Engineer I",
                commenterName: "Rick James"
            },
        ]
    },
    {
        companyID: 100002,
        reviews: [
            {
                reviewTitle: "Review Title",
                reviewID: 123,
                payScore: 5,
                cultureScore: 5,
                worklifeScore: 5,
                comments: "This is a basic comment",
                jobTitle: "Software Engineer I",
                commenterName: "Rick James"
            },
            {
                reviewTitle: "Review Title",
                reviewID: 124,
                payScore: 3,
                cultureScore: 5,
                worklifeScore: 5,
                comments: "This is a basic comment",
                jobTitle: "Software Engineer I",
                commenterName: "Rick James"
            },
            {
                reviewTitle: "Review Title",
                reviewID: 125,
                payScore: 3,
                cultureScore: 4,
                worklifeScore: 5,
                comments: "This is a basic comment",
                jobTitle: "Software Engineer I",
                commenterName: "Rick James"
            },
            {
                reviewTitle: "Review Title",
                reviewID: 126,
                payScore: 4,
                cultureScore: 3,
                worklifeScore: 4,
                comments: "This is a basic comment",
                jobTitle: "Software Engineer I",
                commenterName: "Rick James"
            },
        ]
    },
]