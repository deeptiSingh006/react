import {useState} from 'react'
function GetList (){
    const[datalist,setdatalist]=useState([]);
    async function buttonHandler(event){
       event.preventDefault();
       const response = await fetch('https://hello-react-dj-default-rtdb.firebaseio.com/chotatodo.json')
       const data = await response.json() 

           const tododata=[];
           //parse each element in the response 
           for (const key in data){
                // create a temporary list variable that we will later put in the array
                const todolist={
                    // create a new tuple id tha is equal to key
                   id:key,
                   // bring up all other elements 
                   ...data[key]
               }
               // push the new list to the array
               tododata.push(todolist);
           }
           // set the data array 
           setdatalist(tododata);
    }
  return(
     <div>
    <div>
    <button onClick={buttonHandler}>My to do list</button>
    </div>
    <div>
    
    <ul>
       {datalist.map((i)=>{
           return <li key={i.id}>"Task" | {i.todo} |"Due on"| {i.duedate} </li>
       })}
    </ul>
    </div>

    </div>
    );

}
export default GetList;