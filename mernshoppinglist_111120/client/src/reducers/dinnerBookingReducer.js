
import { ADD_DINNER_BOOKING, GET_DINNER_BOOKINGS } from "../actions/types"

const initialState = {
    dinnerBookings: [],

}


export default function (state = initialState, action) {
    switch (action.type) {

        case GET_DINNER_BOOKINGS:
            return {
                ...state,
                dinnerBookings: action.payload,
            };


        case ADD_DINNER_BOOKING:
            return {
                ...state,
                dinnerBookings: [action.payload, ...state.dinnerBookings]
            }





        default: return state
    }
}