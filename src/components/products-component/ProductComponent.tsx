import {FC} from "react";
import {ProductModel} from "../../models/ProductModel.ts";
import ReviewsComponent from "./reviews-component/ReviewsComponent.tsx";


type ProductComponentProps = {
    product: ProductModel
}

const ProductComponent:FC<ProductComponentProps> = ({product: {id, title, rating, price, images, reviews}}) => {
    return (
        <ul className="list-decimal p-5">
            <li className={'underline'}>{id}</li>
            <li>{title}</li>
            <li>{price}</li>
            <li>{rating}</li>
            <li>
                <ol>
                {images.map((image, index) => (
                    <li key={index}>
                        <img src={image} alt={title} />
                    </li>
                ))}
                </ol>
            </li>
            <li>  <ReviewsComponent reviews={reviews}/></li>
        </ul>
    );
};

export default ProductComponent;