import { combineReducers } from "redux";
import amountReducers from './amountReducer';

export const reducers = combineReducers({
   amount: amountReducers
})