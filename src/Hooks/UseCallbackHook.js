import React, {useState, useCallback } from 'react'
import TestComp from './TestComp';

export default function UseCallbackHook() {
const [number, setnumber] = useState(0);
const [somearray, setsomearray] = useState(0);

const setItems = useCallback(
    (myNumber) => {
        return [number, number+ myNumber, number+ myNumber, number+ myNumber]
    },
    [number],
)


    return (
        <div>
            <input onChange={e=>setnumber(parseInt(e.target.value))} placeholder="giva a number"/>
            <button onClick={()=>setsomearray(3)}> click to show alert</button>
            <TestComp loopNum={setItems}></TestComp>
        </div>
    )
}
