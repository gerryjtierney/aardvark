
import { GET_STARTERS, ADD_STARTER, DELETE_STARTER, PUT_STARTER, STARTERS_LOADING } from "../actions/types"

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

        case DELETE_STARTER:
            return {
                ...state,
                starters: state.starters.filter(starter => starter._id !== action.payload)
            }

        case ADD_STARTER:
            return {
                ...state,
                starters: [action.payload, ...state.starters]
            }

        case STARTERS_LOADING:
            return {
                ...state,
                loading: true
            }




        default: return state
    }
}