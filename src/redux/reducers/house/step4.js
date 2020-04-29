import * as CONSTANTS from '../../constants'
import initialState from '../../initialState'

const step4 = (state = initialState.house.step4, action) => {
    switch (action.type) {
        case CONSTANTS.SET_ROOF_GEOMETRY:
            return {
                ...state,
                ...action.payload
            }

        case CONSTANTS.SET_ROOF_MATERIAL:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export default step4