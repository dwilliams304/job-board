import { Review } from "../../../data/reviews";

type ReviewCardProps = {
    review: Review;
}

export default function ReviewCard({review}: ReviewCardProps){
    const averageRating = (review.payScore + review.cultureScore + review.worklifeScore) / 3;
    const roundedScore = averageRating.toFixed(1);

    return(
        <div className="border shadow-md">
            <div className="border-b-2 space-y-2">
                <h3 className="font-bold text-xl">{review.reviewTitle} - {roundedScore}/5</h3>
                <p>{review.commenterName}, ({review.jobTitle})</p>
                <div className="flex space-x-10">
                    <p>Pay: {review.payScore} / 5</p>
                    <p>Culture: {review.cultureScore} / 5</p>
                    <p>Work life balance: {review.worklifeScore} / 5</p>                    
                </div>
            </div>
            <div className="py-4">
                <p>{review.comments}</p>
            </div>
        </div>
    )
}