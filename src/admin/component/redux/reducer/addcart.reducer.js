import { ADDTOCART, GETCARTDATA } from "../ActionType";

const initilize={
    isloadibg:false,
    cart:[],
    error:null
}


export const cartReducer=(state=initilize,action)=>{
    console.log(action);
    switch (action.type) {
        case ADDTOCART:
            return{
                ...state,
                cart:state.cart.concat(action.payload)
            }

            case GETCARTDATA:
            return{
                isloading: false,
                review:action.payload,
                error: null
            }

            
    
        default:
            return state;
    }
}


