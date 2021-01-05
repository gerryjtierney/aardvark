import axios from "axios"
import { ADD_REWARD, GET_REWARDS } from "./types";





export const getRewards = () => dispatch =>{         

    axios
        .get("/api/rewards")
        .then(res => 
            dispatch({
                type: GET_REWARDSS,
                payload: res.data
            })
        )
}






export const addReward = (reward) => dispatch =>{
    axios
        .post("/api/rewards", reward)
        .then(res => 
            dispatch({
                type: ADD_REWARD,
                payload: res.data
            }))
};