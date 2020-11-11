import { combineReducers } from "redux";
import starterReducer from "./starterReducer"
import mainReducer from "./mainReducer.js"
import dessertReducer from "./dessertReducer.js"





export default combineReducers({
    starter: starterReducer,
    main: mainReducer,
    dessert: dessertReducer
})