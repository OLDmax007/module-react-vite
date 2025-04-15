import {FC} from "react";
import {ReviewModel} from "../../../models/ProductModel.ts";
import ReviewComponent from "./ReviewComponent.tsx";

type ReviewsComponentProps = {
    reviews: ReviewModel[]
}

const ReviewsComponent:FC<ReviewsComponentProps> = ({reviews}) => {
    return (
        <ul className={'list-disc pl-5'}>
            {reviews.map((review: ReviewModel, index) => (
                <ReviewComponent review={review} key={index}/>
            ))}
        </ul>
    );
};

export default ReviewsComponent;