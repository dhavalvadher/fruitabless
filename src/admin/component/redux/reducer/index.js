import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { FacilitesReducer } from "./facility.reducer";
import { productsReducer } from "./products.reducer";
import { shopReducer } from "./shop.reducer";
import { reviewReducer } from "./reviews.reducer";
// import { reviewReducer } from "./reviews.reducer";



export const rootReducer = combineReducers({
    counter: counterReducer,
    facilites: FacilitesReducer,
    products: productsReducer,
    shop: shopReducer,
    // reviews: reviewReducer
    review:reviewReducer
})
