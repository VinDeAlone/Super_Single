import {countries, statesIndia, citiesMaharastra, maritalStatuses} from '../Personal'

const personal = {
    countries : countries,
    states : statesIndia,
    cities : citiesMaharastra,
    maritalStatuses : maritalStatuses
}

export const personalReducer = (state = personal) => {
    return state
}