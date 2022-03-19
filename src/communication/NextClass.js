
import { connect } from 'react-redux';
import { getUsersList } from '../redux/actions';
import React, { Component } from 'react';
class NextClass extends Component {
    componentDidMount(){
        this.props.getUsersList()
    }
    render() {
        return (
            <div>
                <h1>next class</h1>
                {this.props.users.map((item)=><h1>{item}</h1>)}

            </div>
        )
    }
}

const  mapStateToProps = (state)=>{
    console.log("hello props",state)
        return {users:state.users?state.users:[]}
    
    }
    const  mapDispatchToProps = (dispatch) =>{
        return({
            getUsersList: ()=> dispatch(getUsersList())
        })
    }
    
    
    export default connect(mapStateToProps, mapDispatchToProps)(NextClass);
