import axios from "axios";
export const ADD_MESSAGE='ADD_MESSAGE';
export const sendMsg=(abc)=>{

    return function(dispatch,getState){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data[0].title);
            dispatch({
                type:ADD_MESSAGE,
                payload:{ message: response.data[0].title}
            });
        });
    }
}
