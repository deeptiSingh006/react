import { useState } from "react";
import Aryan from './Aryan';
import Sanju from './Sanju';

function Deepti() {

    const[cookingValue, setCookingValue] = useState('');

    

    const onCookingDone = (inputCookedItem) =>{
        console.log(inputCookedItem);
        setCookingValue(inputCookedItem);
    };
  
      return (
        <div >
          <h1> =========In Deepti Component=========</h1>
          <h2>From Deepti: Today Sanju Cooked = {cookingValue}</h2>
          <Sanju onCookingDone={onCookingDone}/> 
          <Aryan lunchVal={cookingValue}/>
        </div>
      );
    }
    
    export default Deepti;