import axios from "axios"
import { ADD_BOOKING, GET_BOOKINGS } from "./types";





export const getBookings = () => dispatch =>{         

    axios
        .get("/api/bookings")
        .then(res => 
            dispatch({
                type: GET_BOOKINGS,
                payload: res.data
            })
        )
}






export const addBooking = (booking) => dispatch =>{
    axios
        .post("/api/bookings", booking)
        .then(res => 
            dispatch({
                type: ADD_BOOKING,
                payload: res.data
            }))
};