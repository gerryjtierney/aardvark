import axios from "axios"
import { GET_STARTERS, STARTERS_LOADING } from "./types";

export const getStarters = () => dispatch =>{
    dispatch(setStartersLoading())
    axios
        .get("/api/starters")
        .then(res => 
            dispatch({
                type: GET_STARTERS,
                payload: res.data
            })
        )
}






export const setStartersLoading = () =>{
    return{
        type: STARTERS_LOADING
    }
}