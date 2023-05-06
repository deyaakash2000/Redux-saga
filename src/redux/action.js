import { ADD_TO_CART,REMOVE_TO_CART,CLEAR_TO_CART } from "./constant"
export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}


export const clearToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: CLEAR_TO_CART,
        data
    }
}


export const removeToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: REMOVE_TO_CART,
        data
    }
}
