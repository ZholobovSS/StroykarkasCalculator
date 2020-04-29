import * as CONSTANTS from '../constants'


// ACTIONS FOR STEP 1

export * from './Step1'


//  ACTIONS FOR STEP 2

export * from './Step2'


//  ACTIONS FOR STEP 3

export * from './Step3'


//  ACTIONS FOR STEP 4

export * from './Step4'


//  ACTIONS FOR STEP 5

export * from './Step5'


//  ACTIONS FOR FORM

export * from './Form'


// DESTROY_SESSION

export const destroyState = () => ({
    type: CONSTANTS.DESTROY_SESSION
})


//ACTIONS FOR PRICE

export const setNewPrice = (price) => ({
    type: CONSTANTS.SET_HOME_PRICE,
    payload: price
})


//ACTIONS CHANGE STEP

export const setNextStep = (step) => ({
    type: CONSTANTS.SET_NEXT_STEP,
    payload: {currentState: step},
})


export const setPreviousStep = (step) => ({
    type: CONSTANTS.SET_PREVIOUS_STEP,
    payload: {currentState: step},
})


