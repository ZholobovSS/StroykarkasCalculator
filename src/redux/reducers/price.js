import * as CONSTANTS from '../constants'
import initialState from '../initialState'

const price = (state = initialState.price, action) => {
  switch (action.type) {

    case CONSTANTS.SET_HOME_PRICE:
      return action.payload

    default:
      return state
  }
}

export default price 