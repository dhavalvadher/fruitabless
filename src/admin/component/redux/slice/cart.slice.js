import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action);

            let index = state.cart.findIndex((v) => v.pid === action.payload)

            if (index !== -1) {

                state.cart[index].qty++;
            } else {
                state.cart.push({ pid: action.payload, qty: 1 })
            }
        },
        
        incrementQty: (state, action) => {
            console.log(action);
            const index = state.cart.findIndex((v) => v.pid === action.payload);
            state.cart[index].qty++;
        },

        decrementQty: (state, action) => {
            console.log(action);
            const index = state.cart.findIndex((v) => v.pid === action.payload);
            state.cart[index].qty--;
        },

        removeProducts: (state, action) => {
state.cart=state.cart.filter((v) => v.pid !== action.payload)
        }
    },



})

export const { addToCart, incrementQty ,decrementQty,removeProducts} = cartSlice.actions

export default cartSlice.reducer;



