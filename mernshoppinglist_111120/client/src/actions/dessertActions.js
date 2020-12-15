import axios from "axios"
import { GET_DESSERTS, DESSERTS_LOADING } from "./types";

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


export const setDessertsLoading = () =>{
    return{
        type: DESSERTS_LOADING
    }
}