import React, {useState, useMemo } from 'react'


export default function UseMemoHook() {
    const [name, setname] = useState(0);
    const [place, setplace] = useState(0);


    const iseven = useMemo(() => { // memorize the value
        var i = 0 ;

        while(i < 10000){
            console.log(i)
            i++
        }
        
        return name % 2 == 0
        
    }, [name])

    // function iseven(){
    //     var i  =0;
    //     while(i < 9000){
    //                 console.log(i)
    //                 i++
    //     }
                
    //             return name % 2 == 0
                
    // }

    function updateName() {
        var i = 0
        setname(name +1);
    }
    function updatePlace() {
        setplace(place +1);
    }

    // function isEven() 
    return (
        <div>
            <h1 style={{color:iseven?"red":"green"}}>{name}</h1>
           


            <button onClick={updateName} >
                update name
            </button>


            <h1 >{place}</h1>


            <h1 > this is the updated value </h1>

            <button onClick={updatePlace}>updatePlace</button>
        </div>
    )
}
