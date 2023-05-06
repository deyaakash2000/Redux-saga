import {  SET_PRODUCT_LIST } from "./constant"

export const productData = (data = [], action) => {
    switch (action.type) {
        // case PRODUCT_LIST:
        //     console.log("PRODUCT LIST condtion ", action)
        //     return [action.data]
        case SET_PRODUCT_LIST:
            return [...action.data]

        default:
            return data


    }
}