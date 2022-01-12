import { useContext } from "react";
import {CounterContext} from './AppContext1'

function ChildComp3(){
    const count = useContext(CounterContext);


    return ( <>

            <h1> Counter Value Passed as Context {count} </h1>
    </>
    );

}
export default ChildComp3;