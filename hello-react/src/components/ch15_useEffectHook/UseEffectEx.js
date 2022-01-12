// Main Job in React 
//1. Render the UI 
//2. User interacts with UI 
//3. Re-render when use interacts 
// Component is a function that runs from top to bottom
// Effect and SideEffect are same it everything else the React has to do apart from Main Job
// E.g. Fetching data from a URL 

import { useEffect, useState } from "react";


function UseEffectEx(){
    const [dataGit,setDataGit] =useState();
    const [loaded,setLoaded] =useState(false);

  
    /*
    const gitarray=[];
    fetch('https://api.github.com/users/deeptiSingh006', {mode:'cors'}).then(response =>{
        return response.json();
      }).then(data=>{
        console.log(data);
        gitarray.push(data);
        setDataGit(gitarray);
        setLoaded(true);
      })*/
  
   // Above code will keep on calling the fetch function
   //1 When page loads
   //2. page load gets data that triggers state fucntion
   //3. on state change component is re-rendered 
   //4. calling fetch again
   // To avoid this side effect on infinite loop we use useEffect
   useEffect(()=>{
    const gitarray=[];
    fetch('https://api.github.com/users/deeptiSingh006', {mode:'cors'}).then(response =>{
    return response.json();
    }).then(data=>{
    console.log(data);
    gitarray.push(data);
    setDataGit(gitarray);
    setLoaded(true);
    })},[]);
    

  return(
      <div>
          <ul>
              {loaded && dataGit.map((i) => {
                  return <li key={i.id}>{"Name ="+i.name + " | Number of public repositories =" + i.public_repos }</li>
              })}
          </ul>
      </div>
  )

}

export default UseEffectEx;