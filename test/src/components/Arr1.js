//import {useState} from 'react';
function Arr1()
{
    const arr=['yellow','teal','green', 'light blue', 'green'];
    function handleEdit(event,i){
        console.log(i);
        event.currentTarget.style.color = i;
    }   
    return(
        <div >
            <ul>
            {arr.map((i)=>{ return(<li key={i} style={{color: 'blue'}} onClick={(event)=>{handleEdit(event,i)}}> {i} </li>)})}
            </ul>
        </div>

    );
}
export default Arr1;