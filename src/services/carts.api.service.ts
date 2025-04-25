import {CartModel} from "../models/CartModel.ts";
import {urls} from "../constants/urls.ts";
import {BaseResponseModel} from "../models/BaseResponseModel.ts";

export const cartsApiService = {
    getCartsOfUserById: async ( id: number):Promise<BaseResponseModel & {carts: CartModel[]}> => {
        return (await fetch(urls.carts.cartsOfUserById(id))).json()
    }
}
