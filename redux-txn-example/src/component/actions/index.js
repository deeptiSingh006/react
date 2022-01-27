//Action Creator 
import axios from 'axios';
export  const updTxn = (txn) =>{
    return function(dispatch,getState){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response);
            dispatch({ 
                type:'UPDATE_TXN',
                payload: txn
                });
            }
            );
    }
}