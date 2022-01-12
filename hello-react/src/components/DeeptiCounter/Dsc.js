import {useState} from 'react';
import Child1 from './Child1';
import {createContext} from 'react';

const CountextDssCounter = createContext();
const TexttDssCounter = createContext();


function Dsc(){
    const[count,setCount]=useState(0);
    const[texti,setText]=useState();
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    function handleText(event){
        event.preventDefault();
        setText(event.target.value);
    }
    return(
        <div>
            <button onClick={increment}> click for increment</button>
            <button onClick={decrement}> click for decrement</button>
            <input  value={texti} onChange={handleText}></input>
            <h1>count={count}</h1>
            <CountextDssCounter.Provider value={count}>
            <TexttDssCounter.Provider value={texti}>
            <Child1/>
            </TexttDssCounter.Provider>
            </CountextDssCounter.Provider>
        </div>
    );

} 
export default Dsc;
export { CountextDssCounter , TexttDssCounter };