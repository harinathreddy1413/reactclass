import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getNames} from '../redux/actions/index';



 class DemoChild extends Component {
     
    render() {
        return (
            <div>
                {this.props.users.map((item)=><h2>{item.id}</h2>)}
                <h1> this is chold co,ponent for redux demo</h1>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{    // store ni props ki attach 
    console.log(state)
    return {
        users : state? state:[]
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getuserName : ()=>dispatch(getNames())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DemoChild)




// step 1 :- create folder for each operation (actions, reducer, store);
// steps 2:- define costants for action type  .... action will return object type and data
// step 3 :- define reducers
// step 4 :-  create store .
// step 5 :- store to be passed to root element 
// step 6:-  component to be connected to the store
// step 7 :- create mapStateToprops, mapdispatchtoprops wna dthen connect the component using connect from react-redux;
