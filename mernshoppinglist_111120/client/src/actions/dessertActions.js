import axios from "axios"
import { GET_DESSERTS, ADD_DESSERT, DELETE_DESSERT, PUT_DESSERT, DESSERTS_LOADING } from "./types";

export const getDesserts = () => dispatch =>{
    dispatch(setDessertsLoading())
    axios
        .get("/api/desserts")
        .then(res => 
            dispatch({
                type: GET_DESSERTS,
                payload: res.data
            })
        )
}



export const addDessert = (dessert) => dispatch =>{
    axios
        .post("/api/desserts", dessert)
        .then(res => 
            dispatch({
                type: ADD_DESSERT,
                payload: res.data
            }))
}



export const deleteDessert = (id) => dispatch => {
    axios
        .delete(`/api/desserts/${id}`)
        .then(res => 
            dispatch({
                type: DELETE_DESSERT,
                payload: id
            })
            )
}



export const setDessertsLoading = () =>{
    return{
        type: DESSERTS_LOADING
    }
}