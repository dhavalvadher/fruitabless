// import { ADD_REVIEWS, DELETE_REVIEWS, EDIT_REVIEWS, ERROR_REVIEWS, GET_REVIEWS, LOADING_REVIEWS } from "../ActionType";

import { DELETE_REVIEWS, EDIT_REVIEWS, GET_REVIEWS } from "../ActionType";


// const initialValues = {
//     isLoading: false,
//     reviews: [],
//     error: null
// }

// export const reviewReducer = (state = initialValues, action) => {
//     console.log(action);

//     switch (action.type) {
//         case LOADING_REVIEWS:
//             return {
//                 ...state,
//                 isLoading: true
//             }
//         case ERROR_REVIEWS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 error: action.payload
//             }
//         case ADD_REVIEWS:
//             return {
//                 isLoading: false,
//                 reviews: state.reviews.concat(action.payload),
//                 error: null
//             }
//         // case GET_REVIEWS: {
//         //     return {
//         //         isLoading: false,
//         //         reviews: action.payload,
//         //         error: null
//         //     }
//         // }
//         // case DELETE_REVIEWS:
//         //     return {
//         //         isLoading: false,
//         //         reviews: state.reviews.filter((v) => v.id !== action.payload),
//         //         error: null
//         //     }
//         // case EDIT_REVIEWS:
//         //     return {
//         //         isLoading: false,
//         //         reviews: state.reviews.map((v) => v.id === action.payload.id ? action.payload : v),
//         //         error: null
//         //     }

//         default:
//             return state

//     }



// }







const initialState = {
    isLoading: false,
    review: [],
    error: null
}

export const reviewReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {

        case GET_REVIEWS:
            return {
                ...state,
                isLoading: false,
                review: state.review.concat(action.payload),
                error: null
            }

        case DELETE_REVIEWS:
            return {
                ...state,
                isLoading: false,
                review: state.review.filter((v) => v.id !== action.payload),
                error: null
            }

        case EDIT_REVIEWS:
            return {
                ...state,
                isLoading: false,
                review: state.review.map((review) =>
                    review.id !== action.payload.id ? review : action.payload
                ),
                error: null
            };

        default:
            return state;
    }
}

