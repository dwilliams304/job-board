import { Review } from "../../../data/types";
import ReviewCard from "./ReviewCard";

type ReviewsListProps = {
    reviews: Review[];
}

export default function ReviewsList({reviews}: ReviewsListProps){
    return(
        <div>
            <h2 className="pb-4">Showing {reviews.length} reviews.</h2>
            <div className="flex flex-col w-1/2 space-y-6">
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