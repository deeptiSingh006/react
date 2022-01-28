import { createStore } from "redux";
import rootReducer from "./components/reducers/rootReducer";

const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
export default store;


