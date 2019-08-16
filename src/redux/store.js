import { createStore, combineReducers, applyMiddleware} from 'redux';
import { ADD_TO_CART, REMOVE_TO_CART, GET_COURSE_LIST } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialStore = {
    cart : [],
}
const initialCourses = {
    courses: []
}
const cartReducer = (state = initialStore, action) => {

    switch (action.type) {

        case ADD_TO_CART:
            //Preguntamos si el curso ya esta agregado entonces retorna el estado y sino lo agrega al nuevo estado
            if (state.cart.find(cursoId => cursoId === action.payload)) return state
            return{
                ...state,
                cart: state.cart.concat(action.payload)
            }
            
        case REMOVE_TO_CART:
            return{
                //Pedido el estado anterior ...state y despues filtramos y devolvemos todos menos el cursoId
                ...state,
                cart: state.cart.filter(cursoId => cursoId !== action.payload)
            }
        default:
            return state

    }    
    
}

const coursesReducer = (state = initialCourses, action ) => {    
    switch (action.type) {
        case GET_COURSE_LIST:
            return{
                ...state,
                courses:action.payload
            }
        default:
            return state
    }
}

export default createStore(combineReducers({cartReducer, coursesReducer}) , composeWithDevTools(applyMiddleware(thunk)));