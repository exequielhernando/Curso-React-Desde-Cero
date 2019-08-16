import { ADD_TO_CART, REMOVE_TO_CART, GET_COURSE_LIST } from "./actions";
import Axios from "axios";

export const addToCart = id => ({
    type: ADD_TO_CART,
    payload: id
});
export const removeToCart = id => ({
    type: REMOVE_TO_CART,
    payload: id
});
export const getCourseList = () => dispatch => {
    Axios.get(`http://my-json-server.typicode.com/exequielhernando/json-db/cursos`)
    .then(response => {
        return dispatch({
            type: GET_COURSE_LIST,
            payload: response.data
        })
    })
} 
