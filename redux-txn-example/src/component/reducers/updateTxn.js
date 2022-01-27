const defaultState = [{'TxnDesc':'Dummy','Amount':100}];
const addTxnRecords = (state=defaultState, action) =>{
    switch(action.type){
        case "UPDATE_TXN": return [...state,action.payload];
        default: return state;
    }

}

export default addTxnRecords;