import {createContext, useState} from "react";
import ChildComp2  from "./ChildComp2";

const CounterContext = createContext();


function AppContext1(){
    const [counter, setCounter] = useState(0);
    function increment(){
        setCounter(counter+1);
    }
    function decrement(){
        setCounter(counter-1);
    }

    return ( <>
            <h1> Counter = {counter} </h1>
            <button onClick={increment}>Count Up</button>
            <button onClick={decrement}>Count Down</button> 
            <CounterContext.Provider value={counter}>
                <ChildComp2/>
            </CounterContext.Provider>
    </>
    );

}
export default AppContext1;
export {CounterContext};