
import { GET_MAINS, ADD_MAIN, DELETE_MAIN, PUT_MAIN, MAINS_LOADING } from "../actions/types"

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

        case DELETE_MAIN:
            return {
                ...state,
                mains: state.mains.filter(main => main._id !== action.payload)
            }

        case ADD_MAIN:
            return {
                ...state,
                mains: [action.payload, ...state.mains]
            }

        case MAINS_LOADING:
            return {
                ...state,
                loading: true
            }




        default: return state
    }
}