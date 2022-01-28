import { useEffect } from "react";
import {AiOutlineShoppingCart} from "react-icons/ai";
import axios from "axios";
import { useState } from "react";
import {useDispatch} from "react-redux";
import {addToCart} from './shopAction';

function ShoppingCart(){
const [shop,setShop]=useState([]);

const dispatch=useDispatch();
useEffect(
        ()=>{
        async function fetchData(){
            const response =await axios.get('https://fakestoreapi.com/products');
            console.log(response);
            setShop([...response.data]);
            console.log(shop);
        }
        fetchData();
    },[]);

function onClickHandler(idRec){
  
    dispatch(addToCart(idRec));
    console.log("Item Selected with ID " + idRec)
}

    return (
        <div>
            <h1>MY SHOPPING STORE</h1>
            <div className=" flex flex-row flex-wrap space-x-15 space-y-25">
                {shop.map((i)=>{return (<div><img src={i.image} className="w-24 h-24 m-9"></img>
                <button onClick={()=>{onClickHandler(i.id)}}>Add to Cart </button></div>
                )})}
            </div>
        </div>
    );

}
export default ShoppingCart;