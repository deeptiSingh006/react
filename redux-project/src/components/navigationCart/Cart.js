import {AiOutlineShoppingCart} from "react-icons/ai";
import {useSelector} from "react-redux";

function Cart(){
    const rmState=useSelector((state)=>state.shopReducer);

    return <div>
            <nav className="items-end"><AiOutlineShoppingCart/></nav>
            <h2>Items in Cart {rmState.length}</h2>
            </div>

}

export default Cart;

            
            