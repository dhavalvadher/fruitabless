import axios from 'axios';
import { ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, ERROR_CATEGORY, GET_CATEGORY } from '../ActionType';
import { CATEGORIES_URL } from '../../Utils/baseURL';




export const setError = (error) => ({ type: ERROR_CATEGORY, payload: error });

export const getCategories = () => async (dispatch) => {
    try {
        const response = await axios.get(CATEGORIES_URL + 'list_categories');
        dispatch({ type: GET_CATEGORY, payload: response.data });
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const addCategory = (data) => async (dispatch) => {
    
    try {
        const response = await axios.post(CATEGORIES_URL + 'post_categories', data);
        dispatch({ type: ADD_CATEGORY, payload: response.data });
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const deleteCategory = (id) => async (dispatch) => {
    
    try {
        await axios.delete(CATEGORIES_URL + 'delete_categories/' + id);
        dispatch({ type: DELETE_CATEGORY, payload: id });
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const editCategory = (data) => async (dispatch) => {
    
    try {
        const response = await axios.put(CATEGORIES_URL + 'update_categories/' + data._id, data);
        dispatch({ type: EDIT_CATEGORY, payload: response.data });
    } catch (error) {
        dispatch(setError(error.message));
    }
};
