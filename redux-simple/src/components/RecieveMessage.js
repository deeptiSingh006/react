import {useSelector} from "react-redux";
function RecieveMessage(){
    const rmState=useSelector((state)=>state.messageReducer);
    return(
        <div>
            <ul>
                {rmState.map((i,index)=>{return <li key={index}>{i.message}</li>})}
            </ul>
        </div>
    );
}
export default RecieveMessage;