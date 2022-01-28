import { useState } from "react";
import {useRef} from 'react';

function ToDo(){
    return(
        <div>
        <input placeholder='enter ToDo' type='text'  ref={inputTodo}/>
        
        <button>Todo</button>
        </div>
    )
}