import {useEffect, useState} from "react";
import {CartModel} from "../../models/CartModel.ts";
import CartComponent from "./CartComponent.tsx";
import {cartsApiService} from "../../services/carts.api.service.ts";
import {useParams} from "react-router-dom";

const CartsComponent = () => {
    const [carts, setCarts] = useState<CartModel[]>([])

    const params = useParams()
    const userId = params.userId

    useEffect(() => {
        if (userId) {
            const fetchCarts =async () => {
                const response = await cartsApiService.getCartsOfUserById(+userId)
                setCarts(response.carts)
            }

            fetchCarts()
        }

        return () => {
            console.log('completed')
        }
    }, [userId]);


    console.log(carts)

    return (
        <div>
            { carts.length > 0 ?
                (carts.map((cart: CartModel) => (
                <CartComponent key={cart.id} cart={cart}/>
            ))) : (
                <p>Cart is empty</p>
                )
            }
        </div>
    );
};

export default CartsComponent;