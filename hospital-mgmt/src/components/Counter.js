import {useState} from 'react';
function Counter(){
    const [increment,setincrement]=useState(0);
    const [incrementby,setincrementby]=useState(1);

    return(
        <>
        <label> counter increment by 
            <input onChange={e=>setincrementby(Number(e.target.value))} 
             type="number"></input>
        </label>
        <p>user has clicked button for {increment} times</p>
        <button onClick={()=>setincrement(increment+incrementby)}>click here </button>
        </>
    );
}
export default Counter;