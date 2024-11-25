import { Review } from "../../../types/Companies";

type ReviewCardProps = {
    review: Review;
}

export default function ReviewCard({review}: ReviewCardProps){

    return(
        <div className="border shadow-md">
            <div className="border-b-2 space-y-2">
                <h3 className="font-bold text-xl">{review.title} - {review.scores.averageScore}/5</h3>
                <p>{review.reviewerName}, ({review.jobTitle})</p>
                <div className="flex space-x-10">
                    <p>Pay: {review.scores.payScore} / 5</p>
                    <p>Culture: {review.scores.cultureScore} / 5</p>
                    <p>Work life balance: {review.scores.worklifeScore} / 5</p>                    
                </div>
            </div>
            <div className="py-4">
                <p>{review.comments}</p>
            </div>
        </div>
    )
}