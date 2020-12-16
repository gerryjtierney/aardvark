import axios from "axios"
import { ADD_DINNER_BOOKING, GET_DINNER_BOOKINGS } from "./types";



export const getDinnerBookings = () => dispatch =>{

    axios
        .get("/api/dinnerBookings")
        .then(res => 
            dispatch({
                type: GET_DINNER_BOOKINGS,
                payload: res.data
            })
        )
}



export const addDinnerBooking = (dinnerBooking) => dispatch =>{
    axios
        .post("/api/dinnerBookings", dinnerBooking)
        .then(res => 
            dispatch({
                type: ADD_DINNER_BOOKING,
                payload: res.data
            }))
}



