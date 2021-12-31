import { DECREMENT, INCREMENT, SET_PRENOM } from "./constants.js";

export function increment(payload = 1) {
  return {
    type: INCREMENT,
    payload,
  };
}

export function decrement(payload = 1) {
  return {
    type: DECREMENT,
    payload,
  };
}

export function setPrenom(payload = '') {
  return {
    type: SET_PRENOM,
    payload,
  };
}

// Flux Standard Action (FSA)
// https://github.com/redux-utilities/flux-standard-action
// { type, payload, error, meta }
