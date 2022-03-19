import React from 'react'
const numArray = [1,2,3,4,5,6,7,8,9];   //lists
var listItems= numArray.map((number)=><h2>{number}</h2>) 
const names = ["hari", "venkatesh", "krishna ", "ravi"];


export default function ListsKeys() {
    return (
        <div>
            <h1>Lists and Keys</h1>
            <h3>regular way</h3>
            <h2>1</h2>
            <h2>2</h2>
            <hr/>

            {window.location.pathname}
            <h3>maps way</h3>
            {listItems}
            <hr/>
            {names.map((item)=>(<li>{item}</li>))}  
            {/* only on lists */}

        </div>
    )
}
