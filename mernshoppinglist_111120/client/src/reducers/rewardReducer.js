import { ADD_REWARD, GET_REWARDS } from "../actions/types"

const initialState = {
    rewards: [],

}


export default function (state = initialState, action) {
    switch (action.type) {

        case GET_REWARDS:
            return {
                ...state,
                rewards: action.payload,
            };


        case ADD_REWARD:
            return {
                ...state,
                rewards: [action.payload, ...state.rewards]
            }





        default: return state
    }
}