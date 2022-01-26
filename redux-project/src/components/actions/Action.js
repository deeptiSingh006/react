export const ADD_MESSAGE='ADD_MESSAGE';
export const sendMsg=(abc)=>{
    return{
        type:ADD_MESSAGE,
        payload:abc
    };
}
