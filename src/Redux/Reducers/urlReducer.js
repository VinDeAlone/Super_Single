import {SET_URL} from '../Constants'

const initialState = "general"

export const urlReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_URL :
            return action.data
        default :
            return state
    }
}