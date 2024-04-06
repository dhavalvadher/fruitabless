import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { FacilitesReducer } from "./facility.reducer";
import { productsReducer } from "./products.reducer";



export const rootReducer = combineReducers({
    counter: counterReducer,
    facilites: FacilitesReducer,
    products: productsReducer
})
