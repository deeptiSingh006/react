import {useState, useEffect} from 'react';
function P2(){
    const [gitdata, setgitData]=useState([])

    useEffect(function handler(){
        fetch('https://api.github.com/users/deeptiSingh006')
        .then(response=>{return response.json()})
        .then(data=>{
            console.log(data)
            setgitData(data);
        })
    },[]);
    
    return(
        <div>
            <ul>
            {<li>{gitdata.login}</li>}
            {<li><img src={gitdata.avatar_url}/></li>}
            {<li>{JSON.stringify(gitdata)}</li>}
         
            </ul>
        </div>
    ) ;
}
 export default P2;