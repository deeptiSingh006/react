import Sanju from './Sanju';
import Aryan from './Aryan';
import {useState} from 'react';
function Deepti(){
    const [cooking,setcooking]=useState();
    const message=(sanjucooked)=>{
        setcooking(sanjucooked)
    }
    return(
        <div>
            <label>sanju cooked {cooking}</label>
           <Sanju message={message}/>
           <Aryan menu={cooking}/>
         </div>
         );
    }
export default Deepti;