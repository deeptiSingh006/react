import { messageReducer } from "./messageReducer";
import {combineReducers} from "redux";
const rootReducer=combineReducers({messageReducer});

export default rootReducer;