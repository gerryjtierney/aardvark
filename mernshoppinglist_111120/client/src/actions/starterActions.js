import axios from "axios"
import { GET_STARTERS, ADD_STARTER, DELETE_STARTER, PUT_STARTER, STARTERS_LOADING } from "./types";

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



export const addStarter = (starter) => dispatch =>{
    axios
        .post("/api/starters", starter)
        .then(res => 
            dispatch({
                type: ADD_STARTER,
                payload: res.data
            }))
}



export const deleteStarter = (id) => dispatch => {
    axios
        .delete(`/api/starters/${id}`)
        .then(res => 
            dispatch({
                type: DELETE_STARTER,
                payload: id
            })
            )
}



export const setStartersLoading = () =>{
    return{
        type: STARTERS_LOADING
    }
}