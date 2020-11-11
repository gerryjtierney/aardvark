
import { GET_DESSERTS, ADD_DESSERT, DELETE_DESSERT, PUT_DESSERT, DESSERTS_LOADING } from "../actions/types"

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

        case DELETE_DESSERT:
            return {
                ...state,
                desserts: state.desserts.filter(dessert => dessert._id !== action.payload)
            }

        case ADD_DESSERT:
            return {
                ...state,
                desserts: [action.payload, ...state.desserts]
            }

        case DESSERTS_LOADING:
            return {
                ...state,
                loading: true
            }




        default: return state
    }
}