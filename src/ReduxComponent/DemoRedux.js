import React, { Component } from 'react'
import {getNames, getUsers} from '../redux/actions/index';
import { connect } from 'react-redux';
import DemoChild from './DemoChild';
import Button from '@mui/material/Button';


class DemoRedux extends Component {

    componentDidMount(){
        // this.props.getuserName()  // actuon calling 
    }
    render() {
        return (
            <div>
                {this.props.names.map((item)=><h2>{item.title}</h2>)}
                <h1>THIS IS REACT REDUX</h1>

                {/* <button onClick={()=> this.props.getuserName()}>  click to get data</button> */}
                <Button onClick={()=> this.props.getuserName()} variant="contained">Contained</Button>


                <DemoChild></DemoChild>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{    // store ni props ki attach  .... {state variables}    
    // map 1-1
    // state - store
    //props - components properties 
    console.log(state)
    return {
        users : state ? state:[],
        names: state ? state : []
    }
}



const mapDispatchToProps = (dispatch) =>{      // {dispacth methods}
    // map 1-1
    // dispatch methods
    //props - components properties 
    return {
        getuserName : ()=>dispatch(getNames()),
        getusers : ()=>dispatch(getUsers())  // store.dispatch  1.
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux)




