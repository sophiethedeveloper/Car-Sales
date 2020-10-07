export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addCarFeature = (feature) => {
  return { type: "ADD_FEATURE", payload: feature };
};

export const removeCarFeature = (feature) => {
  return { type: "REMOVE_FEATURE", payload: feature };
};
