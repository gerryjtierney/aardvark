
import { GET_MAINS, MAINS_LOADING } from "../actions/types"

const initialState = {
    mains: [],
    loading: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MAINS:
            return {
                ...state,
                mains: action.payload,
                loading: false
            };


        case MAINS_LOADING:
            return {
                ...state,
                loading: true
            }




        default: return state
    }
}