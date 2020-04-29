import * as CONSTANTS from '../../constants'

export const setRoofGeometry = (slopes) => {

    const geometry = {
        roofGeometry: slopes
    }

    return {
        type: CONSTANTS.SET_ROOF_GEOMETRY,
        payload: geometry
    }
}

export const setRoofMaterial = ( RoofMaterial, type ) => {
    
    const step = {
        roofMaterial: RoofMaterial
    }


    Object.keys(step.roofMaterial).map( el => step.roofMaterial[el].value = 0 )

    step.roofMaterial[type.name.toLowerCase()].value = 1;

    return {
        type: CONSTANTS.SET_ROOF_GEOMETRY,
        payload: step
    }
}