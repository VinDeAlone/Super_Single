import {combineReducers} from 'redux'
import { informationReducer } from './informationReducer'
import {urlReducer} from './urlReducer'
import {astrologyReducer} from './astrologyReducer'
import {personalReducer} from './personalReducer'
import {familyReducer} from './familyReducer'

export const rootReducer = combineReducers({
    informationReducer,
    urlReducer,
    astrologyReducer,
    personalReducer,
    familyReducer
})