
import { GET_DESSERTS, DESSERTS_LOADING } from "../actions/types"

const initialState = {
    desserts: [],
    loading: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DESSERTS:
            return {
                ...state,
                desserts: action.payload,
                loading: false
            };


        case DESSERTS_LOADING:
            return {
                ...state,
                loading: true
            }




        default: return state
    }
}