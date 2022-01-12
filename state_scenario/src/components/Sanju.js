import {useRef} from 'react';



function Sanju(props){
    const cook=useRef();
    const cookingHandler=(event)=>{
        event.preventDefault();
        props.message(cook.current.value);
        cook.current.value='';
   
};
    return(
        <form onSubmit={cookingHandler}>
            <label>Cooked</label>
            <input type='text' required id='cook' ref={cook}/>
           <button>cooked</button>
        </form>
    );
} 
export default Sanju; 