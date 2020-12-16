
import { ADD_LUNCH_BOOKING, GET_LUNCH_BOOKINGS } from "../actions/types"

const initialState = {
    lunchBookings: [],

}


export default function (state = initialState, action) {
    switch (action.type) {

        case GET_LUNCH_BOOKINGS:
            return {
                ...state,
                lunchBookings: action.payload,
            };


        case ADD_LUNCH_BOOKING:
            return {
                ...state,
                lunchBookings: [action.payload, ...state.lunchBookings]
            }





        default: return state
    }
}