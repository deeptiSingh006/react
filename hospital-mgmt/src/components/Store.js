import {createStore ,combineReducers} from 'redux';
import { numberofclicksReducer } from './Reducers'; 
const rootReducer = combineReducer(
   { numberOfClicks : numberofclicksReducer,}
);

export const  store = createStore(rootReducer);