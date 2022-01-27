import { useSelector} from "react-redux";
function Statement(){
    const myState = useSelector((state) => state.addTxnRecords);
    return (<ul>
        {myState.map(i=>{
            return (<li>{i.TxnDesc} | - | {i.Amount} </li>)
        })}
    </ul>)

}

export default Statement;