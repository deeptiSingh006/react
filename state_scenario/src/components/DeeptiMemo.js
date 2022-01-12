import TejasMemo from './TejasMemo';
import AryanMemo from './AryanMemo';
import {useState,useRef} from 'react';
function DeeptiMemo(){
    const tejashw=useRef();
    const aryanhw=useRef();
    const [thw,setthw]=useState();
    const [ahw,setahw]=useState();
    function thwHandler(event){
        event.preventDefault();
        setthw(tejashw.current.value);
        console.log(thw);
    }
    function ahwHandler(event){
        event.preventDefault();
        setahw(aryanhw.current.value);
        console.log(ahw);
    }
    return(
        <div>
        <form onSubmit={thwHandler}>
            <label>Tejas HW </label>
            <input type="text" required id='thw' ref={tejashw} ></input>
            <button> click here</button>       
             </form>
        <form onSubmit={ahwHandler}>
        <label>Aryan HW </label>
        <input type="text" required id='thw' ref={aryanhw} ></input>
        <button> click here</button>       
         </form> 
         <TejasMemo tejashw={thw}/> 
         <AryanMemo aryanhw={ahw}/> 
         </div>   
    )
    ;
}
export default DeeptiMemo;