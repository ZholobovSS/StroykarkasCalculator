import * as CONSTANTS from '../../constants'

export const setInterior = ( step2, type) => {
    
    const newStep2 = step2;

    Object.keys(newStep2).map( el => newStep2[el].value = 0 )

    newStep2[type.name.toLowerCase()].value = 1;

    return {
        type: CONSTANTS.SET_HOME_INTERIOR,
        payload: newStep2
    }
}