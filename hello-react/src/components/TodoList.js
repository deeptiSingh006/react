import {useRef} from 'react';
import { Navigate } from 'react-router-dom';
function TodoList(){
    const inputToDo = useRef();
    const inputdate = useRef();
   function formHandler(event){
       event.preventDefault();
       console.log(inputToDo.current.value);
       console.log(inputdate.current.value);
       fetch('https://hello-react-dj-default-rtdb.firebaseio.com/chotatodo.json',
       {
           method:'POST',
           body:JSON.stringify({
            'todo':inputToDo.current.value,
            'duedate':inputdate.current.value
           }),
           headers:{
               'Content-Type':'aplication/json'
           }
        }).then()
   }
    return(
        <form onSubmit={formHandler}>
            <label >To Do Item </label>
          <input type='text' required id='todoItem' ref={inputToDo}/>
          <input type='date' required id='dateItem' ref={inputdate}/>
          <button>To Do</button>
       </form>
    );
    
}
export default TodoList;