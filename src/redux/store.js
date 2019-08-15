import { createStore } from 'redux';
import { ADD_TO_CART } from './actions';

const initialStore = {
    cart : []
}

const rootReducer = (state = initialStore, action) => {
    
    switch (action.type) {
        case ADD_TO_CART:
            if (state.cart.find(a => a === action.payload)) return state
            return{
                ...state,
                cart: state.cart.concat(action.payload)
            }
        default:
            return state

    }    
}

export default createStore(rootReducer);