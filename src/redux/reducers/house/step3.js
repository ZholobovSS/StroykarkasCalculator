import * as CONSTANTS from '../../constants'
import initialState from '../../initialState'

const step3 = (state = initialState.house.step3, action) => {
    switch (action.type) {
        case CONSTANTS.SET_HOME_EXTERIOR:
            return {
                ...state,
                ...action.payload,
            }


        default:
            return state;
    }
}

export default step3