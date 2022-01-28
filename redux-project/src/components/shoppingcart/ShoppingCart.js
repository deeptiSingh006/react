import { useEffect } from "react";
import {AiOutlineShoppingCart} from "react-icons/ai";
import axios from "axios";
import { useState } from "react";

function ShoppingCart(){
const [shop,setShop]=useState([]);
useEffect(
        ()=>{
        async function fetchData(){
            const response =await axios.get('https://fakestoreapi.com/products');
            console.log(response);
            setShop([...response.data]);
            console.log(shop);
        }
        fetchData();
    },[]
);

    return (
        <div>
            <nav className="items-end"><AiOutlineShoppingCart/></nav>
            
            <h1>MY SHOPPING STORE</h1>
            <div className=" flex flex-row flex-wrap space-x-15 space-y-25">
                {shop.map((i)=>{return (<img src={i.image} className="w-24 h-24 m-9"></img>
                
               )})}

           
            
            </div>
        </div>
    );

}
export default ShoppingCart;