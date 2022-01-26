import { ADD_MESSAGE } from "../actions/Action";

const defaultState=[{message:'dummy'}];
export const messageReducer=(state=defaultState,action)=>{
    switch(action.type){
        case ADD_MESSAGE:return [...state,action.payload];
        default: return state;
                }
}