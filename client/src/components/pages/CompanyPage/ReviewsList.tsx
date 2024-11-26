import { Review } from "../../../types/Companies";
import ReviewCard from "./ReviewCard";

type ReviewsListProps = {
    reviews: Review[];
}

export default function ReviewsList({reviews}: ReviewsListProps){
    return(
        <div className="w-full mx-auto">
            <h2 className="pb-4">Showing {reviews.length} reviews.</h2>
            <div className="2xl:grid w-full space-y-4 2xl:space-y-0 2xl:grid-flow-col 2xl:gap-8">
                {
                    reviews.map(review => {
                        return(
                            <ReviewCard
                                key={review.id}
                                review={review}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}