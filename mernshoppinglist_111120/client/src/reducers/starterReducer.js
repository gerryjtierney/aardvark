
import { GET_STARTERS, STARTERS_LOADING } from "../actions/types"

const initialState = {
    starters: [],
    loading: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_STARTERS:
            return {
                ...state,
                starters: action.payload,
                loading: false
            };


        case STARTERS_LOADING:
            return {
                ...state,
                loading: true
            }




        default: return state
    }
}