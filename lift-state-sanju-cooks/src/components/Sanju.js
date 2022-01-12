import { useState } from "react";
import {useRef} from 'react';



function Sanju(props) {

    const inputCookedItem = useRef();
    const [cookingItem, setCookingItem]=useState('');   


    
    function onCookingDoneHandler(event){
        event.preventDefault();
        setCookingItem(inputCookedItem.current.value)
        //props.onCookingDone(inputCookedItem.current.value);

        inputCookedItem.current.value="";
    }
  
      return (

        
        <div >
          <h1> =========In Sanju Component=========</h1>

          <form onSubmit={onCookingDoneHandler}>


          <label >I Sanju cooked </label>
          <input placeholder='enter item' type='text' required id='cookedItem' ref={inputCookedItem}/>
          <button>Cooked</button>
          <h2> Sanju has cooked {cookingItem}</h2>
        </form>
        </div>
      );
    }
    
    export default Sanju;