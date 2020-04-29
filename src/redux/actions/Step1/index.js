import * as CONSTANTS from '../../constants'

export const setHomeLength = (length) => ({
    type: CONSTANTS.SET_HOME_LENGTH,
    payload: length
})

export const setHomeWidth = (width) => ({
    type: CONSTANTS.SET_HOME_WIDTH,
    payload: width
})

export const setHomeHeight = (height) => ({
    type: CONSTANTS.SET_HOME_HEIGHT,
    payload: height
})

export const setFloorsCount = (floors) => ({
    type: CONSTANTS.SET_FLOORS_COUNT,
    payload: floors
})

export const setMansard = (mansard) => ({
    type: CONSTANTS.SET_MANSARD,
    payload: mansard
})