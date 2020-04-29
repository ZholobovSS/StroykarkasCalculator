import * as CONSTANTS from '../../constants'
import initialState from '../../initialState'

const step1 = (state = initialState.house.step1, action) => {
    switch (action.type) {


        case CONSTANTS.SET_HOME_LENGTH:
            return {
                ...state,
                homeLength: action.payload
            }


        case CONSTANTS.SET_HOME_WIDTH:
            return {
                ...state,
                homeWidth: action.payload
            }

        
        case CONSTANTS.SET_HOME_HEIGHT:
            return {
                ...state,
                homeHeight: action.payload
            }

        case CONSTANTS.SET_FLOORS_COUNT:
            return {
                ...state,
                countFloors: action.payload
            }

        case CONSTANTS.SET_MANSARD:
            return {
                ...state,
                mansard: action.payload
            }


        default:
            return state;
    }
}

export default step1