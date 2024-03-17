
import {SET_GENERAL_INFO, SET_ASTROLOGICAL_INFORMATION, SET_PERSONAL_INFORMATION, SET_FAMILY_INFORMATION, SET_EDUCATIONAL_INFORMATION, SUBMIT_INFORMATION} from '../Constants'
import {submitAPI} from '../../API/userDataAPI'

export const setGeneralInfo = (data) => async (dispatch) => {
    try {
        dispatch({
            type : SET_GENERAL_INFO,
            data : data
        })
    } catch (error) {
        console.log(error)
    }
}

export const setAstrologicalInformation = (data) => async (dispatch) => {
    try {
        dispatch({
            type : SET_ASTROLOGICAL_INFORMATION,
            data : data
        })
    } catch (error) {
        console.log(error)
    }
}

export const setPersonalInformation = (data) => async (dispatch) => {
    try {
        dispatch({
            type : SET_PERSONAL_INFORMATION,
            data : data
        })
    } catch (error) {
        console.log(error)
    }
}

export const setFamilyInformation = (data) => async (dispatch) => {
    try {
        dispatch({
            type : SET_FAMILY_INFORMATION,
            data : data
        })
    } catch (error) {
        console.log(error)
    }
}

export const setEducationalInformation = (data) => (dispatch) => {
    try {
        dispatch({
            type : SET_EDUCATIONAL_INFORMATION,
            data : data
        })
    } catch (error) {
        console.log(error)
    }
}

export const submitInformation = (data) => async (dispatch) =>{
    try {

        const {result} = await submitAPI(data)
        console.log(result)
        dispatch({
            type : SUBMIT_INFORMATION
        })
    } catch (error) {
        console.log(error)
    }
}