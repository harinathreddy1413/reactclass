import React, { useContext } from 'react'
import { DummyContext } from './Parent'
import { connect } from 'react-redux';
import { getUsersList } from '../redux/actions';



function Child3(props) {
    console.log(props)
    // props.getUsersList();

    const data = useContext(DummyContext);
    return (
        // <DummyContext>


                <div>
                            {props.users.map((item)=><h1>{item}</h1>)}

                    this is child 3
                    <h1>{data.place}</h1>

                </div>
    )

    
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


export default connect(mapStateToProps, mapDispatchToProps)(Child3);
