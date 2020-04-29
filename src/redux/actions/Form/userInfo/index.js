import * as CONSTANTS from '../../../constants'

export const setUserInfo = (step) => {
    return {
        type: CONSTANTS.SET_USER_INFO,
        payload: step
    }
}