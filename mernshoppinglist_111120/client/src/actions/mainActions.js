import axios from "axios"
import { GET_MAINS, MAINS_LOADING } from "./types";

export const getMains = () => dispatch =>{
    dispatch(setMainsLoading())
    axios
        .get("/api/mains")
        .then(res => 
            dispatch({
                type: GET_MAINS,
                payload: res.data
            })
        )
}







export const setMainsLoading = () =>{
    return{
        type: MAINS_LOADING
    }
}