import * as CONSTANTS from '../../../constants'
import axios from 'axios'

export const setAgree = (check) => {
    const formState = {
        agree: check
    }

    return {
        type: CONSTANTS.SET_AGREE,
        payload: formState
    }
}


export const setSending = (sending) => {
    const formState = {
        sending
    }

    return {
        type: CONSTANTS.SET_FORM_SENDING,
        payload: formState
    }

}

export const setFormStatus = (open, type, text) => {
    const formState = {
        sendStatus: {
            open,
            type,
            text
        }
    }
    return {
        type: CONSTANTS.SET_FORM_SENDSTATUS,
        payload: formState
    }
}


export const sendForm = (bodyFormData) => {
    return (dispatch) => {
        dispatch(setSending(true));

        axios.post(CONSTANTS.CF7_ENDPOINT, bodyFormData).then(
            (response) => {
                if (response.status === 200) {
                    if (response.data.status === "validation_failed") {
                        throw new Error(response.data.message);
                    } else { 
                        dispatch(setFormStatus(true, 'success', 'Форма успешно отправлена'))
                    }                
                } else {
                    throw new Error('При отправке формы произошла ошибка. Попробуйте ещё раз.');
                }
            }).catch(
                (error) => {
                dispatch(setFormStatus(true, 'error', error.message))
            }).finally( () => {
                dispatch(setSending(false));
            });
    }
}