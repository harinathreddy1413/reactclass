import React from 'react'
import './exterenal.js'
import './Event.css' // external css

export default function EventFun() {


    function showAlter(x, y) {
        alert("hey hi"+ x+y);
    }


    return (
        <div>
            <h1 className="heading" >Event in Functional component</h1>
            <h1  style={{backgroundColor:"red"}}>INLINE CSS</h1>  
            
            {/* inline css to be avoided */}
            <button onClick={showAlter}>click me to show alert </button>  
            {/* event without parameters */}
            <button onClick={()=>showAlter("hari", "venkatesh")}>click me to show alert </button>   
            {/* if we want to send params event must be callback */}
        </div>
    )
}
