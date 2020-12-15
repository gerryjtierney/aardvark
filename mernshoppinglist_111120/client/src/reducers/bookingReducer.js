
import { ADD_BOOKING, GET_BOOKINGS } from "../actions/types"

const initialState = {
    bookings: [],

}


export default function (state = initialState, action) {
    switch (action.type) {

        case GET_BOOKINGS:
            return {
                ...state,
                bookings: action.payload,
            };


        case ADD_BOOKING:
            return {
                ...state,
                bookings: [action.payload, ...state.bookings]
            }





        default: return state
    }
}