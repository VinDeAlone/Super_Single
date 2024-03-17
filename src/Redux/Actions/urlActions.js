import {SET_URL} from '../Constants'

export const setUrl = (data) => async (dispatch) => {
    try {
        dispatch({
            type : SET_URL,
            data : data
        })
    } catch (error) {
        console.log(error)
    }
}