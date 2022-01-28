import { ADD_ITEM } from "./shopAction";

const defaultState=[];

export const shopReducer=(state=defaultState,action)=>{
    switch(action.type){
        case ADD_ITEM : {
                        const val = [...state, action.payload]
                        return val;
                        }
        default: return state;
   }
}