import axios from "axios"
import { ADD_BOOKING } from "./types";





export const addBooking = (booking) => dispatch =>{
    axios
        .post("/api/bookings", booking)
        .then(res => 
            dispatch({
                type: ADD_BOOKING,
                payload: res.data
            }))
}