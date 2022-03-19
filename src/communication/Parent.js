import React, { useState , createContext } from 'react';
import reactDom from 'react-dom';
import Child from './Child'
import ChildClass from './ChildClass';
import NextClass from './NextClass';
export const DummyContext = createContext({"place":"hyderhahaabad"})


export default function Parent(props) {
    const [name, setName] = useState("hello")
    const [loading, setLoading] = useState(false)
    
    let names = ["hari", "ramu", "krishna", "rahul", "vijay"]


    // var name1 = names[0]
    // var name2 = names[1]


    let [name1, name2, ...rest] = names;



    function childToParent(params) {
        React.
        console.log(params)
        setName(params)
        setLoading(true)

    }


    return (
        <DummyContext.Provider value={{"place":"hyderabad"}}>
        <div>
            this is parent

            {/* {loading && <h1>hello child i reciende your props{name}</h1>} */}

            {/* <h1 onCli>{name1}</h1>
            <h1>{name2}</h1>
            <h1>{rest}</h1> */}
            <NextClass/>



{/* <Child name="hari" func={childToParent}></Child> */}


{/* <ChildClass></ChildClass> */}


            
        </div>
        </DummyContext.Provider>
    )
}
