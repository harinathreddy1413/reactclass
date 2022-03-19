import React, { Component } from 'react'

export default class EventClass extends Component {

    constructor(props){
        super(props)
        this.state={
            name:"ramu"
        }
        this.showAlter = this.showAlter.bind(this);
    }


    showAlter =(x)=>{
        // alert("hey hi"+ x+y);
        this.setState({name:x})
        

    }


    render() {
        return (
            <div>
                <h1 className="heading">Event in Class component</h1>

            <h1  style={{backgroundColor:"red"}}>INLINE CSS</h1>  
            <h1>{this.state.name}</h1>
            
            {/* inline css to be avoided */}
            <button onClick={this.showAlter}>withour params</button>  
            {/* event without parameters */}
            <button onClick={()=>this.showAlter("hari")}>with params</button>   
            <input onChange={()=>this.showAlter("hari")}/>
            {/* if we want to send params event must be callback */}
            </div>
        )
    }
}
