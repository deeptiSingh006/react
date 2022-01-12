import Counter from "./components/Counter";
import { Provider } from "react-redux";
import {Store} from "./components/Store";
import './App.css';

function App() {
  return (
    <Provider store={Store}>
    <Counter/>  
    </Provider>
  );
}

export default App;
