import axios from "axios"
import { GET_MAINS, ADD_MAIN, DELETE_MAIN, PUT_MAIN, MAINS_LOADING } from "./types";

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



export const addMain = (main) => dispatch =>{
    axios
        .post("/api/mains", main)
        .then(res => 
            dispatch({
                type: ADD_MAIN,
                payload: res.data
            }))
}



export const deleteMain = (id) => dispatch => {
    axios
        .delete(`/api/mains/${id}`)
        .then(res => 
            dispatch({
                type: DELETE_MAIN,
                payload: id
            })
            )
}



export const setMainsLoading = () =>{
    return{
        type: MAINS_LOADING
    }
}