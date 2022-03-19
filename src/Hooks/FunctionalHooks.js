import React , {useState, useEffect }from 'react';
import axios from 'axios';



export default function FunctionalHooks() {
    const [name , setName] =   useState("Krishna");   // variable , setVariable = usestate with initial value
    const [firstname , setFirstname] =   useState("harinath");
    const [lastname , setLastname] =   useState("reddy");
    const [place , setPlace] =   useState("hyderabad");
    

    function updateState(){
        setFirstname("krishna")
    }
    
    function updateName() {
        setName("harinasgfth")
        
    }

    // useEffect will expect two parameters
    // useEffect(()=>{
    //     console.log("use effect as component did initial")
    //     // axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
    //         // console.log("use effect as component did initial",res)
    //         // setName("res.data.title")
    //     // }
    //     // )
    // })

    
    
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/todos/4').then(res => {
    //         console.log("use effect as component did mount",res)
    //         // setName(res.data.title)
    //     })
    // },[]) // this is similar to componentDidMount 

    
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/todos/2').then(res => {
    //         console.log("use effect as component did update",res)
    //         // setName(res.data.title)
    //     })
    // },[firstname])// this is similar to componentDidUpdate



    // useeffect allows two parameter,
    // first para is callbback function
    // second para is dependency list
    // console.log("rendered"    )


    return (
        <div>
            <div>
                
                <h1>
                FUNCTION COMPONET WITH HOOKS
                </h1>

                <h2>{name}</h2>

                
                {/* <h2>{firstname}</h2> */}

                <button onClick={updateState}> update </button>
                <button onClick={updateName}> click to upfatename </button>
            </div>
        </div>
    )
}
