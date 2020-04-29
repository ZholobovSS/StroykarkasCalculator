import * as CONSTANTS from '../../constants'

export const setExterior = ( step3, type ) => {
    
    const newStep3 = step3;

    Object.keys(newStep3).map( el => newStep3[el].value = 0 )

    newStep3[type.name.toLowerCase()].value = 1;

    return {
        type: CONSTANTS.SET_HOME_EXTERIOR,
        payload: newStep3
    }
}