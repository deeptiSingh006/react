import { useState } from "react";

function SayHello(){
    const [greetingText, setGreetingText]=useState(false);

    function greetindtextHandler(){
        setGreetingText(true);
    }
    return( 
    <>
    <button onClick={greetindtextHandler}>Change Text</button>
    {
        greetingText && <h3>Now you have new greetings</h3>
    }
    {
        !greetingText && <h3>Disappear this text on click</h3>
    }
    </>
     )

}
export default SayHello;