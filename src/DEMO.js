import React, { Component } from 'react'

export default class DEMO extends Component {
    constructor(props){
        super();
        console.log(this.props)
        console.log(props)
    }
    render() {
        console.log(this.props)
        return(<div>

        </div>)
        
    }
}
