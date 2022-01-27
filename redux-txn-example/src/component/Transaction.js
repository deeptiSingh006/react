import { useSelector, useDispatch } from "react-redux";
import {updTxn} from './actions/index'
import {useRef} from 'react';
const Transaction = () =>{
    const dispatch = useDispatch(); 

    const desc = useRef();
    const amt = useRef();
    
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        dispatch(updTxn({"TxnDesc":desc.current.value,
        "Amount":amt.current.value}))
        desc.current.value='';
        amt.current.value='';

    }
    return(
        <form onSubmit={onSubmitHandler}>
        <div> 
        Description : <input placeholder='Description of Transaction' type='text' required id='desc' ref={desc}/>
        <br/>
        Amount: <input placeholder='Description of Transaction' type='number' required id='txnAmt' ref={amt}/>
        <br/>
        <button>Submit Transaction</button>
        </div>
        </form>

    );

}

export default Transaction;