import {FC} from "react";
import {CartModel} from "../../models/CartModel.ts";

type CartComponentProps = {
    cart: CartModel
}

const CartComponent:FC<CartComponentProps> = ({cart}) => {
    return (
        <ul>

            <li>{cart.id}</li>
            <li> {cart.total}</li>
            <li>  {cart.discountedTotal}</li>
        </ul>
    );
};

export default CartComponent;