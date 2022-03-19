import {GET_NAMES, GET_USERS} from './Constant';
export const reducer = (state, action)=>{
    switch(action.type){
        
        case GET_NAMES:

            console.log("action payload is from getnames",)
            return  action.payload
        case GET_USERS:
            console.log("action payload is from get users",)
            return  action.payload
    }
}