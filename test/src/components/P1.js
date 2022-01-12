import {link} from 'react-router-dom';
function P1()
{
   /* const customer = {
        first_name: 'Deepti ',
        last_name: 'Singh'
    };
    const {first_name,last_name}=customer;
    console.log(first_name,last_name);*/
function handler()
{
    window.location.href="https://github.com/deepti-i8labs";
}
     
    const data = {
        image: 'https://avatars.githubusercontent.com/u/96975462?v=4' ,
        github: "https://github.com/deepti-i8labs",
        cardTitle: 'Deepti Singh' ,
        cardDescription: "Deepti Singh is a ReactJs Developer with 2 years of ReactJs experience",
        
  };
  
    
    
return(
    <div>
        <img src={data.image}/><br/>
        <label>{data.cardTitle}</label><br/>
        <h1>{data.cardDescription}</h1><br/>
        <a href={data.github}><button>Click to go to Github</button></a>
       
      
    </div>
);    
}
export default P1;