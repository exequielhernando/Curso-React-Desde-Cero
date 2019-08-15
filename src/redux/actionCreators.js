import { ADD_TO_CART } from "./actions";

export const addToCart = id => ({
    type: ADD_TO_CART,
    payload: id
})