import * as CONSTANTS from '../constants'
import initialState from '../initialState'


const step = (state = initialState.step, action) => {

  switch (action.type) {

    case CONSTANTS.SET_NEXT_STEP:
        return {
            ...state,
            ...action.payload
        }

    case CONSTANTS.SET_PREVIOUS_STEP:
        return {
            ...state,
            ...action.payload
        }

    default:
      return state
  }
}

export default step 