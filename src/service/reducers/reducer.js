import { ADD_TO_CART } from '../constants'
import { REMOVE_FROM_CART } from '../constants'
const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
             console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]

            case REMOVE_FROM_CART:
                console.warn("REMOVE_FROM_CART condition ", action);
                state.length= state.length? state.length-1:[]
                return [...state]

                
        default:
            return state
    }


}