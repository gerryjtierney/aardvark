import { combineReducers } from "redux";
import starterReducer from "./starterReducer"
import mainReducer from "./mainReducer.js"
import dessertReducer from "./dessertReducer.js"

import bookingReducer from "./bookingReducer.js";
import lunchBookingReducer from "./lunchBookingReducer.js";
import dinnerBookingReducer from "./dinnerBookingReducer.js";





export default combineReducers({
    starter: starterReducer,
    main: mainReducer,
    dessert: dessertReducer,
    booking: bookingReducer,
    lunchBooking: lunchBookingReducer,
    dinnerBooking: dinnerBookingReducer
})