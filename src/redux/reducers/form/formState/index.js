import * as CONSTANTS from '../../../constants'
import initialState from '../../../initialState'

const formState = (state = initialState.form.formState, action) => {
    switch (action.type) {

        case CONSTANTS.SET_AGREE:
           return {
                ...state,
                ...action.payload
           }

        case CONSTANTS.SET_FORM_SENDING: 
            return {
                ...state,
                ...action.payload
        }

        case CONSTANTS.SET_FORM_SENDSTATUS: 
            return {
                ...state,
                ...action.payload
        }       

        default:
            return state
    }
}

export default formState