import React from "react";
import {useState} from 'react';
function Child(){
    const[count,setCount]=useState(0);
    function show(){
        setCount(1);
    }
    return (

        <div>
            <h1>KIDS</h1>
            <button onClick={show} name='Display'>Display</button>
            {count && <h2>No. of Kids are 2</h2>}
        </div>
    );
}
export default Child;