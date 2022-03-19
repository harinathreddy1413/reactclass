const redux = require('redux');

const createStore = redux.createStore;


const storedata = {    // store 
    soaps:10,
    paste:14,
}

function buySoap(){    // actions 
// api call 
// response data
    return {
        type:"BUY_SOAP",
        payload: 37
    }
}

function buyPaste(){
    return {
        type:"BUY_PASTE",
    }
}

const reducer  = ( state = storedata , action)=>{     // reducers
    switch(action.type){
        case "BUY_SOAP":
            return {
                ...state, soaps:action.payload
            }
        case "BUY_PASTE":
            return {
                ...state, paste:state.paste-1
            }
    }

}



const store = createStore(reducer);     // connecting store
store.subscribe(()=>{console.log("store is subscribed")});



//above is architecture
//below is actions calling
store.dispatch(buySoap());      // dispatching actions 
console.log(store.getState());
store.dispatch(buyPaste());
console.log(store.getState());
store.dispatch(buyPaste());
console.log(store.getState());
store.dispatch(buySoap());


