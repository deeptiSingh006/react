function Child1(props){
const hiHandler=(event)=>{
    event.preventDefault();
    if(props.check==='hi')
    props.changehi("HELLO");
    else
    props.changehi("hi");
}
    return (
 <div>
     <form onSubmit={hiHandler}>
     <button> change {props.check}</button>
     </form>
 </div>
    );
}
export default Child1;