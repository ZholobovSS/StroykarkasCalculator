import * as CONSTANTS from '../../../constants'
import initialState from '../../../initialState'

const userInfo = (state = initialState.form.userInfo, action) => {
    switch (action.type) {
        case CONSTANTS.SET_USER_INFO:
           return {
            ...state,
            ...action.payload
           }
        default:
            return state
    }
}

export default userInfo