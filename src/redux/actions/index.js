// actions will be written here

import axios from 'axios'
import { GET_NAMES,GET_USERS } from './Constants'
export const getNames = () => {

    console.log("action is called")

// return{
//     type:GET_NAMES,
//     payload:[1,2,3,5]  // static
// }
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res =>
            dispatch({
                type: GET_NAMES,
                payload: res.data
            })
        ).catch(res =>
            dispatch({
                type: GET_NAMES,
                payload: res.data
            })
        )
    }
}



export const getUsers = () => {

    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res =>
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        ).catch(res =>
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        )
    }
}