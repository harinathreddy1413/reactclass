import React, { Component } from 'react'
import axios from 'axios';

export default class LifeCycle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "hr",
            data: [{title:"hello"}]
        }

        console.log("this is cycle ", 1);
    }

    componentDidMount() {
        console.log("this is cycle ", 3);
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
            console.log("---->1st ele",res.data[0])
            this.setState({
                data: res.data
            })
        })
    }

    componentDidUpdate() {

    }

    stateUpdate = () => {
        // console.log(this.state.name)
        this.setState({ name: "krishna" }) // state willupdate and component rerender
    }

    

    render() {
        console.log("initial data", this.state.data[0])
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>sr no</th>
                            <th>title</th>
                            <th>user</th>

                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((item,key)=>(<tr key={key}><td>{item.id}</td><td> {item.title}</td><td> {item.userId}</td></tr>))}
                    </tbody>
                    </table>
               

                <button onClick={this.stateUpdate}> click me </button>
            </div>
        )
    }
}


