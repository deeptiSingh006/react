import Message from "./components/Message";
import RecieveMessage from "./components/RecieveMessage";
import LearnTesting from "./components/LearnTesting";
import Child from "./components/Child";
import Counter from "./components/Counter";
import FetchOnPageLoad from "./components/FetchOnPageLoad";
import ShoppingCart from "./components/shoppingcart/ShoppingCart"
import Cart from "./components/navigationCart/Cart";

function App() {
  return (
    <div >
      <Cart/>
      <ShoppingCart/>
      
      {/*<Counter/>
+      <Child/>
      <LearnTesting/>
      <Message/>
      <br/><br/>
      <RecieveMessage/>   
      <FetchOnPageLoad/>*/}
    </div>
  );
}

export default App;
