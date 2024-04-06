import axios from 'axios';
import { baseURL } from '../../../../Utils/baseURL';
import { GET_PRODUCTS, LOADING_PRODUCTS } from '../ActionType';



const handleLoading = () =>  (dispatch) => {
    dispatch({ type: LOADING_PRODUCTS })
}
export const getproducts = () => async(dispatch) => {
    try {
        await axios.get(baseURL + "products")
            .then((response) => {
                dispatch(handleLoading())
                setTimeout(() => {
                    dispatch({ type: GET_PRODUCTS, payload: response.data })
                }, 2000)

            })
            .catch((error) => {

                console.log(error);
            })
    } catch (error) {
        console.log(error);
    }


}

