import {useState} from 'react';
import Edu from '../components/edu';
import Family from '../components/Family';
import Hobby from '../components/hobby';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
const Dummy_Data=[
  {
    id:'1A',
    spouseName: "Jagmeet Singh Malhotra",
    ChildName: "Aryan Singh Malhotra"
  },
  {
    id:'2A',
    spouseName: "Jagmeet Singh Malhotra",
    ChildName: "Tejas Singh Malhotra"
  }
];

function Deepti() {
  const[getState1, setState1]=useState(false);
  const[getState2, setState2]=useState(false);
  const[getState3, setState3]=useState(false);

  const inputTodo = useRef();
  const navigateto = useNavigate();

  function buttonHandler1(){
    
    if(getState1 == true){
      setState1(false)
    }
    else {
      setState1(true)
    }
  }

  function buttonHandler2(){
    
    if(getState2 == true){
      setState2(false)
    }
    else {
      setState2(true)
    }
  }

  function buttonHandler3(){
    
    if(getState3 == true){
      setState3(false)
    }
    else {
      setState3(true)
    }
  }

  function fetchGitHandler(){
    fetch('https://api.github.com/users/deeptiSingh006').then(
      response => {
        return response.json();
      }).then(data=>{
        console.log(data.name);
        console.log(data.login);
      })
  }

  function todoHandler(event){
    event.preventDefault();

    const readTodo = inputTodo.current.value;
    const todoItem={
      item: readTodo
    };
    
    fetch('https://hello-react-dj-default-rtdb.firebaseio.com/Todo.json',{
      method: 'POST',
      body : JSON.stringify(todoItem),
      headers:{
          'Content-type':'application/json'
      }
    }).then(()=>{
      console.log("in db block going to main page");
      navigateto('/');
    });

    console.log("in function");

  }

  const dispatch = useDispatch();
function actionjHandler(){
  dispatch({type:'jaction'});
}
function actionaHandler(){
  dispatch({type:'aaction'});
}
function actiontHandler(){
  dispatch({type:'taction'});
}

    return (
      <div>
        Telling About Deepti
        Hello Deepti your family details - <br/>
        {2+2} <br/>
         <br/>
      {getState1 ? <Family spouse={ Dummy_Data[0].spouseName } kids={Dummy_Data[0].ChildName}/> : null }
          <button onClick={buttonHandler1}>click to show family details</button>
       
      <br/>
      Hello Deepti your qualification details - <br/>
      {getState2 && <Edu collegelogo="https://en.wikipedia.org/wiki/University_of_Texas_at_Austin#/media/File:University_of_Texas_at_Austin_seal.svg"/>}
       <button onClick={buttonHandler2}>Click to show qualification</button>
      <br/>
      Hello Deepti your Hobbies are - <br/>
      {getState3 && <Hobby/> }
      <button onClick={buttonHandler3}>Click to show hobby</button>

      <ul>
        {Dummy_Data.map((famldel)=>{
          return <li key={famldel.id}> {famldel.id}.{famldel.ChildName}</li>
        })}
      </ul>
      <ul>
       {Dummy_Data.map((i)=>{
         return <li key={i.id}>{i.id} | {i.spouseName} | {i.ChildName}</li>
       })}
       </ul>
       <button onClick={fetchGitHandler}>FetchGitDetails</button>
       <div>
        <form onSubmit={todoHandler}>
          <label >To Do Item </label>
          <input type='text' required id='todoItem' ref={inputTodo}/>
          <button>To Do</button>
        </form>
       </div>

       <div>


          <button onClick={actionjHandler} >Give Love to Jagmeet</button>
          <button  onClick={actionaHandler}>Give Love to Aryan</button>
          <button  onClick={actiontHandler}>Give Love to Tejas</button>
       </div>

      </div>
    );
  }
  
  export default Deepti;