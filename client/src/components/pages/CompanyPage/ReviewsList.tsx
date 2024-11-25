import { Review } from "../../../types/Companies";
import ReviewCard from "./ReviewCard";

type ReviewsListProps = {
    reviews: Review[];
}

export default function ReviewsList({reviews}: ReviewsListProps){
    return(
        <div>
            <h2 className="pb-4">Showing {reviews.length} reviews.</h2>
            <div className="grid grid-flow-col gap-8">
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