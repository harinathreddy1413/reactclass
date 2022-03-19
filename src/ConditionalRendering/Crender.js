import React, { Component } from 'react'
import axios from 'axios'

export default class Crender extends Component {
    constructor(props){
        super(props)
        this.state={
            loading:false,
            name :"",
            
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
            this.setState({
                name: res.data.title, loading:true
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.loading ? <div> {this.state.name}</div> : <div>
                    this page is still loading</div>}


                    {this.state.loading && <div> api call is donr</div>}


            </div>
        )
    }
}
