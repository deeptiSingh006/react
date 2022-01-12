import {createStore} from 'redux';


function reducerLike(state={valj:0,vala:0,valt:0},action){
    if(action.type==='jaction'){
    return {
        valj : state.valj + 1,
        vala:state.vala,
        valt:state.valt
    }
   };
   if(action.type==='aaction'){
    return {
        valj : state.valj,
        vala:state.vala+1,
        valt:state.valt
    }
   };
   if(action.type==='taction'){
    return {
        valj : state.valj,
        vala:state.vala,
        valt:state.valt+1
    }
   };
   return {
    valj : state.valj,
    vala:state.vala,
    valt:state.valt
    }
}

const store=createStore(reducerLike);


export default store;