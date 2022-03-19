import React, { useEffect, useState } from 'react'

export default function TestComp(props) {
    const [items, setitems] = useState([])
    useEffect(()=>{
        setitems(props.loopNum(5))
        console.log("update is in progress")
    },[props.loopNum])

    return (
        <div>
            {items.map((item)=><h1>{item}</h1>)}
        </div>
    )
}
