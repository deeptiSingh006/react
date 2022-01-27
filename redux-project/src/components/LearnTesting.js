import {useState} from 'react';

function LearnTesting(){
    const[sh1,setSh1]=useState(0);
    function buttonHandler(){
        setSh1(!sh1);
    }
    return(
        <div>
            <h1>Deepti</h1>
            {sh1 && <h3>Jagmeet</h3>}
            <button  type='button' onClick={buttonHandler}  >Appear</button>
        </div>
    );
}
export default LearnTesting;