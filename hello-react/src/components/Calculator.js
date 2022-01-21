export default Calculator;
import React from "react";
import { useState, useRef } from "react";

function Calculator() {
  const [res, setRes] = useState(0);

  const input1 = useRef();
  const input2 = useRef();
  const clear1=useRef();

  function handleAddtion(event) {
    event.preventDefault();
    setRes(Number(input1.current.value) + Number(input2.current.value));
    input1.current.value='';
    input2.current.value='';

  }
  function handleSub(event) {
    event.preventDefault();
    setRes(Number(input1.current.value) - Number(input2.current.value));
    input1.current.value='';
    input2.current.value='';

  }
  function handleMul(event) {
    event.preventDefault();
    setRes(Number(input1.current.value) * Number(input2.current.value));
    input1.current.value='';
    input2.current.value='';

  }
  function handleDiv(event) {
    event.preventDefault();
    setRes(Number(input1.current.value) / Number(input2.current.value));
    input1.current.value='';
    input2.current.value='';

  }
  function handleClear(){
    clear1.current.value='';
  }

  return (
    <div>
      Number 1<input type="text" name="name1" ref={input1} />
      <br />
      Number 2<input type="text" name="name2" ref={input2} />
      <br />
      <button name="+" onClick={handleAddtion}>
        +
      </button>
      <button name="-" onClick={handleSub}>
        -
      </button>
      <button name="*" onClick={handleMul}>
        *
      </button>
      <button name="/" onClick={handleDiv}>
        /
      </button>
      <button name="clear" onClick={handleClear}>
        clear 
      </button>
      <br />
      Result =<input type="text" value={res} name="result" ref={clear1} />
      
    </div>
  );
}
