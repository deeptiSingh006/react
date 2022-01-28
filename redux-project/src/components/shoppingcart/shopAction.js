export const ADD_ITEM='ADD_ITEM';
export const addToCart=(abc)=>{
    return{
        type : ADD_ITEM,
        payload : abc
    };
}
