//import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import {useState} from 'react';

function Toss(){
   const[coin,setCoin]=useState(0);
    //const a= Math.floor(Math.random()*2);
    function handleClick(e){
        e.preventDefault();
        console.log("value is " + coin);
        setCoin( Math.floor(Math.random()*2));
        
    }
   
    return(
        <div>
           <br/><br/> <button style={{color:"red" ,border:"2px solid blue",fontSize:45}}  onClick={handleClick}>TOSS</button>
           <br/>
           {coin ? <img src="head.jpg"></img>:<img src="tail.jpg"></img>}
        </div>
    )
    ;
}
export default  Toss;