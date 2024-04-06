import { GET_PRODUCTS, LOADING_PRODUCTS } from "../ActionType";


const inistialState = {
    isLoading : false,
    products : [],
    error : null
}

export const productsReducer = (state=inistialState,action) => {
    console.log(action);

    switch (action.type) {
        
        case LOADING_PRODUCTS:
            console.log("loading...");
        return {
            ...state,
            isLoading: true 
        }
        case GET_PRODUCTS:

        return {
            isLoading: false,
            products: action.payload,
            error:null
            
        }
   
        default:
           return state
    }
}