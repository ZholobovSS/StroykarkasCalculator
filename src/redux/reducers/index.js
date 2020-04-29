import * as CONSTANTS from '../constants'
import { combineReducers } from 'redux'
import price from './price'
import house from './house'
import step from './step'
import form from './form'
import initialState from '../initialState'

const appReducer = combineReducers ({
    price,
    house,
    step, 
    form
});

const rootReducer = (state, action) => {
    if (action.type === CONSTANTS.DESTROY_SESSION) {
        state = undefined
    }
    return appReducer(state, action);
}

export default rootReducer

