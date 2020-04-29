import { combineReducers } from 'redux'

import formState from './formState'
import userInfo from './userInfo'

export default combineReducers({
    formState,
    userInfo
});


