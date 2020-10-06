export const ADD_FEATURE = 'ADD_FEATURE';

export const addCarFeature = (newFeature) => {
    return { type: 'ADD_FEATURE', payload: newFeature }
}