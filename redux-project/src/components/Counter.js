import { useState, useEffect } from "react";
import React from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [stopTimer, setStopTimer] = useState(0);

  const [ unmountflag, setUnmountflag] = useState(1);

  useEffect(() => {
    setCount(0)
    const tid = setInterval(() => {
      setCount((count) => count + 1);
      console.log("Counter = " + count);
    }, 1000);
    

    return ()=>{ clearInterval(tid) };

  }, [stopTimer, unmountflag]); // <- add empty brackets here

  function buttonHandler(){
      setStopTimer(stopTimer+1);
  }

  function unmountHandler(){
    setUnmountflag(!unmountflag);
  }
  
  return (
    <div>
  { unmountflag && <h1>I've rendered {count} times!</h1>}
  <button onClick={buttonHandler}>Reset Counter</button>
  <button onClick={unmountHandler}>UnmountCounter</button>
  </div>
);
}

export default Counter;