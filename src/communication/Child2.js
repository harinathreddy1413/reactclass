import React from 'react'
import Child3 from './Child3'

export default function Child2(props) {
    return (
        <div>
            this is child 2
            <Child3 name={props.name}></Child3>
        </div>
    )
}
