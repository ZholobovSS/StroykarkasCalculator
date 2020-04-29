import * as CONSTANTS from '../../constants'
import initialState from '../../initialState'

const step2 = (state = initialState.house.step2, action) => {
    switch (action.type) {
        case CONSTANTS.SET_HOME_INTERIOR: 
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export default step2