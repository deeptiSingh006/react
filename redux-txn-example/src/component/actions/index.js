//Action Creator 
export  const updTxn = (txn) =>{
    return {
        type:'UPDATE_TXN',
        payload: txn
    }
}