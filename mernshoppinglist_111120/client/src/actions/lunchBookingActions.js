import axios from "axios"
import { ADD_LUNCH_BOOKING } from "./types";





export const addLunchBooking = (booking) => dispatch =>{
    axios
        .post("/api/lunchBookings", booking)
        .then(res => 
            dispatch({
                type: ADD_LUNCH_BOOKING,
                payload: res.data
            }))
}

