import {FC} from "react";
import {ReviewModel} from "../../../models/ProductModel.ts";

type ReviewComponentProps = {
    review: ReviewModel
}

const ReviewComponent:FC<ReviewComponentProps> = ({review}) => {
    return (
        <li>
        <ol className={'list-decimal pl-5'}>
            <li>{review.reviewerName}</li>
            <li>{review.reviewerEmail}</li>
            <li>{review.date}</li>
            <li>{review.comment}</li>
            <li>{review.rating}</li>
        </ol>
        </li>
    );
};

export default ReviewComponent;