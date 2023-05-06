import { ADD_TO_CART, REMOVE_TO_CART, CLEAR_TO_CART } from "./constant"

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("ADD_TO_CART condtion ", ...data, action.data)
            return [action.data, ...data]

        case CLEAR_TO_CART:
            console.log("REMOVE_TO_CART condtion ", action)
            return []

        case REMOVE_TO_CART:
            console.log("REMOVE_TO_CART condtion ", action)
            // data.length=data.length?data.length-1 :[]
            const remaining = data.filter(function (value) {
                return value.productId !== action.data;
            });
            return [...remaining]
        default:
            return data

    }
}