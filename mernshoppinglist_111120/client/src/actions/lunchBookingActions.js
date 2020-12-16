import axios from "axios"
import { ADD_LUNCH_BOOKING, GET_LUNCH_BOOKINGS } from "./types";



export const getLunchBookings = () => dispatch =>{

    axios
        .get("/api/lunchBookings")
        .then(res => 
            dispatch({
                type: GET_LUNCH_BOOKINGS,
                payload: res.data
            })
        )
}




export const addLunchBooking = (lunchBooking) => dispatch =>{
    axios
        .post("/api/lunchBookings", lunchBooking)
        .then(res => 
            dispatch({
                type: ADD_LUNCH_BOOKING,
                payload: res.data
            }))
}

