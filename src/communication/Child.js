import React , {useContext} from 'react'
import Child2 from './Child2'
// const DummyContext=  React.createContext()

export default function Child(props) {
    // const data = useContext(DummyContext);

    return (
        <div>
            <h1>i have a prop {props.name}</h1>

            <button onClick={()=>props.func("hi dad")}> click me</button>

            <Child2 name={props.name}></Child2>
            {/* {data.place} */}
        </div>
    )
}


// props drilling - avoid this we  used redux (seperate), usecontext(react implementation)