import {useState, useEffect} from 'react';
function Apirequest(){
    const [tododata,settododata]=useState([]);

    
  // UseEffect ensures that the API is called only once
   useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/todos')
     .then(response => response.json())
     .then(data =>{
      //throw Error(data);
      settododata(data);
    }).catch((error) => {
      console.log(error)
    });
  },[]);

  return(
  <div>
      <label>TO Do</label>
      <ul>
        { tododata.map((i)=>{
          return ( <li key={i.id}>{i.title} </li> )
        })}
       </ul>
  </div>

  )
}
export default Apirequest;