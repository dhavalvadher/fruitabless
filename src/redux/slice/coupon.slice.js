import { createSlice } from "@reduxjs/toolkit"
import { baseURL } from "../../Utils/baseURL"
import axios from "axios"

const initialState = {
    isLoading: false,
    coupon: [],
    error: null
}

const couponSlice = createSlice({
    name: 'coupon',
    initialState,
    reducers: {
        coupon: async(state, action) => {
            try {
                await axios.get(baseURL + 'coupon')
                .then((response) => response.data)
                .catch((error) =>  console.log(error))
            } catch (error) {

            }
        },
        addcoupon: async(state, action) => {
            try {
                await axios.post(baseURL + 'coupon')
                .then((response) => response.data)
                .catch((error) =>  console.log(error))
            } catch (error) {

            }
        }
    },



})

export const {coupon ,addcoupon} = couponSlice.actions

export default couponSlice.reducer;




