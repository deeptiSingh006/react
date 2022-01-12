import {CountextDssCounter, TexttDssCounter} from './Dsc';
import { useContext } from "react";

function Child3(props){
    const receivedFromContextStore = useContext(CountextDssCounter);
    const received = useContext(TexttDssCounter);
    return (
        <>
        <h1>Passed as Context: {receivedFromContextStore}</h1>
        <h3>data received {received}</h3>
        </>
    );
    }
    export default Child3;