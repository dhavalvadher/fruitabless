import { ADD_Facility } from "../ActionType";


const inistialState = {
    isLodaing : false,
    facility : [],
    error : null
}

export const FacilitesReducer = (state=inistialState,action) => {
    console.log(action);

    switch (action.type) {
        case ADD_Facility:

        return {
            ...state,
            facility : state.facility.concat(action.payload)
        }
            
            
    
        default:
           return state
    }
}