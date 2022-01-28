import React from "react";
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {sendMsg} from './actions/Action';
function Message(){
    const msg=useRef();
    const dispatch=useDispatch();
    function onSubmitHandler(e){
        e.preventDefault();
        dispatch(sendMsg({message:msg.current.value}));
        msg.current.value='';

    }
    return(
        <div>
        <form onSubmit={onSubmitHandler}>
        <input type='text' placeholder="Send the message" ref={msg}></input>
        <button> Submit</button>
        </form>
        </div>         
    );
}
export default Message;