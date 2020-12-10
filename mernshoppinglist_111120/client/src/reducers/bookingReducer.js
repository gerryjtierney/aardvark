
import { ADD_BOOKING, BOOKINGS_LOADING } from "../actions/types"

const initialState = {
    bookings: [],
    loading: false
}


export default function (state = initialState, action) {
    switch (action.type) {


        case ADD_BOOKING:
            return {
                ...state,
                bookings: [action.payload, ...state.bookings]
            }

        case BOOKINGS_LOADING:
            return {
                ...state,
                loading: true
            }




        default: return state
    }
}