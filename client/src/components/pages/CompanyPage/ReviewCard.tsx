import { Review } from "../../../types/Companies";

type ReviewCardProps = {
    review: Review;
}

export default function ReviewCard({review}: ReviewCardProps){

    return(
        <div className="border shadow-md bg-slate-100 w-full xl:w-96">
            <div>
                <div className="flex flex-col border-b-2 px-12 md:py-4">
                    <h3 className="font-bold text-xl flex">{review.title} - {review.scores.averageScore}/5</h3>
                    <p><span className="font-semibold">Reviewer name: </span>{review.reviewerName}</p>
                    <p><span className="font-semibold">Job title: </span>{review.jobTitle}</p>
                    <p><span className="font-semibold">Current employee? </span>{review.currentEmployee ? "Yes" : "No"}</p>
                    <p><span className="font-semibold">Recommends company? </span>{review.recommendsCompany ? "Yes" : "No"}</p>
                </div>
                <div className="flex flex-col border-b-2">
                    <h3 className="font-semibold text-center">Scores</h3>
                    <div className="flex justify-between px-12 py-4">
                        <p>Pay: {review.scores.payScore.toFixed(1)}</p>
                        <p>Culture: {review.scores.cultureScore}</p>
                        <p>Work-Life: {review.scores.workLifeScore}</p>                    
                    </div>
                </div>
            </div>
            <div className="px-12 py-4 flex flex-col">
                <p className="font-semibold pb-4">Reviewer comments:</p>
                <p>{review.comments}</p>
            </div>
        </div>
    )
}