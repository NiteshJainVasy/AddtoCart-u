import {ADD_TO_CART} from '../constants'
import {REMOVE_FROM_CART} from '../constants'
export const addToCart =(data)=>{
    // console.warn("action",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}

// export const removeToCart =(data)=>{
//     // console.warn("action",data)
//     return {
//         type:Remove_TO_CART,
//         data:data
//     }
// }


export const removeToCart = (data) => {
    console.warn("action removeToCart", data)
    return {    
        type: REMOVE_FROM_CART,
       // data
       data:data
    }
}