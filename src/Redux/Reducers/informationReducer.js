import { SET_GENERAL_INFO, SET_ASTROLOGICAL_INFORMATION, SET_PERSONAL_INFORMATION, SET_FAMILY_INFORMATION, SET_EDUCATIONAL_INFORMATION, SUBMIT_INFORMATION } from '../Constants'

const initialState = {
    gender: "none",
    mobile: "",
    email: "",
    relegion: "",
    cast: "",
    subcast: "",
    gotra: "",
    dosh: "",
    fName: "",
    mName: "",
    lName: "",
    bDate: "",
    age: -1,
    height: -1,
    disability: "None",
    country: "None",
    state: "None",
    city: "None",
    maritalStatus: "",
    familyStatus: "",
    familyType: "",
    familyType2: "",
    education: "",
    employment: "None",
    occupation: "",
    salary: -1,
    workLocation: "",
    isGeneralInfo: false,
    isAstrologicalInfo: false,
    isPersonalInfo: false,
    isFamilyInfo: false,
    isEducationalInfo: false,
    isSubmit : false
}

export const informationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENERAL_INFO:
            return {
                ...state,
                gender: action.data.gender,
                mobile: action.data.mobile,
                email: action.data.email,
                isGeneralInfo: true
            }
        case SET_ASTROLOGICAL_INFORMATION:
            return {
                ...state,
                relegion: action.data.relegion,
                cast: action.data.cast,
                subcast: action.data.subcast,
                gotra: action.data.gotra,
                dosh: action.data.dosh,
                isAstrologicalInfo: true
            }
        case SET_PERSONAL_INFORMATION:
            return {
                ...state,
                fName: action.data.fName,
                mName: action.data.mName,
                lName: action.data.lName,
                bDate: action.data.bDate,
                age: action.data.age,
                height: action.data.height,
                disability: action.data.disability,
                country: action.data.country,
                state: action.data.state,
                city: action.data.city,
                maritalStatus: action.data.maritalStatus,
                isPersonalInfo: true
            }
        case SET_FAMILY_INFORMATION:
            return {
                ...state,
                familyStatus: action.data.familyStatus,
                familyType: action.data.familyType,
                familyType2: action.data.familyType2,
                isFamilyInfo : true
            }
        case SET_EDUCATIONAL_INFORMATION:
            return {
                ...state,
                education: action.data.education,
                employment: action.data.employment,
                occupation: action.data.occupation,
                salary: action.data.salary,
                workLocation: action.data.workLocation,
                isEducationalInfo : true
            }
        case SUBMIT_INFORMATION :
            return {
                ...state,
                isSubmit : true
            }
        default:
            return state
    }
}

