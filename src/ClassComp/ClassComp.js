import React, { Component } from 'react';
import { connect } from 'react-redux';
import Child3 from '../communication/Child3';
import { getUsersList } from '../redux/actions';


class ClassComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "hari",
            age: 36,
            place: 'hyderabad',
            users: []
        }

    }
    componentDidMount(){
        console.log("c d  m",         this.props        )
        this.props.getUsersList()
    }

    componentDidUpdate(){
        console.log("hey this is upate")
    }
    stateUpdate = () => {
        console.log(this.state.name)
        this.props.getUsersList()

        // this.setState({name:"krishna"}) // state willupdate and component rerender
    }

    render() {
        // this.setState({name:"krishna"});
        var detail = this.state;

        console.log("render part", detail.name)
        return (
            <div style={{ color: "red" }}>
                {this.props.users.map((item)=><h1>{item}</h1>)}

                <button onClick={this.stateUpdate}>click me to update name </button>
                <a href="/parent" title="next page"> next page</a>

                {detail.name}
                <Child3></Child3>
            </div>
        )
    }
}


const  mapStateToProps = (state)=>{

    return {users : state.users?state.users:[]}

}

const  mapDispatchToProps = (dispatch) =>{
    return({
        getUsersList: ()=> dispatch(getUsersList())
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(ClassComp);
