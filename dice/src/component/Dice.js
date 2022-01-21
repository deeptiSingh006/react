import { Container } from 'postcss';
import React from 'react';
import {useState} from 'react';
function Dice(){
    const[side,setSide]=useState();
    function handleClick(e){
             e.preventDefault();
             setSide(Math.floor(Math.random()*7)+1);
              }
        
        
         return(
             <div className="bg-transparent">
                <br/><br/> <button className="bg-green-500 text-white text-2xl regular px-3 py-3 mx-5 my-4 hover:bg-violet-400 rounded-lg shadow-xl" onClick={handleClick}><div className="text-2xl">ROLL</div></button>
                
                <br/>
                
                { side === 1 && <img src="1.jpg" width="200px" className="rounded-full  "/>} 
                { side === 2 && <img src="2.jpg" width="200px" className="rounded-full "/> } 
                { side === 3 && <img src="3.jpg" width="200px" className="rounded-full "/> } 
                { side === 4 && <img src="4.jpg" width="200px" className="rounded-full "/> } 
                { side === 5 && <img src="5.jpg" width="200px" className="rounded-full"/> } 
                { side === 6 && <img src="6.jpg" width="200px" className="rounded-full"/> } 
                { side === 7 && <img src="Deepti.jpg" width="200px" className="rounded-full"/> } 
                

               


             </div>
         )
         ;
     }
     export default  Dice;

