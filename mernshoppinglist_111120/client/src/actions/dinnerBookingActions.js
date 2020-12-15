import axios from "axios"
import { ADD_DINNER_BOOKING } from "./types";





export const addDinnerBooking = (booking) => dispatch =>{
    axios
        .post("/api/dinnerBookings", booking)
        .then(res => 
            dispatch({
                type: ADD_DINNER_BOOKING,
                payload: res.data
            }))
}



