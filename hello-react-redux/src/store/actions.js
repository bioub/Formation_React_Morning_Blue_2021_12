import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../api";

// export function increment(payload = 1) {
//   return {
//     type: INCREMENT,
//     payload,
//   };
// }

// export function decrement(payload = 1) {
//   return {
//     type: DECREMENT,
//     payload,
//   };
// }

// export function setPrenom(payload = '') {
//   return {
//     type: SET_PRENOM,
//     payload,
//   };
// }

// Flux Standard Action (FSA)
// https://github.com/redux-utilities/flux-standard-action
// { type, payload, error, meta }

export const increment = createAction('INCREMENT', (payload) => ({payload: payload ?? 1}));
export const decrement = createAction('DECREMENT', (payload) => ({payload: payload ?? 1}));
export const setPrenom = createAction('SET_PRENOM', (payload) => ({payload: payload ?? ''}));

export const fetchUsersThunk = createAsyncThunk('fetchUsers', fetchUsers)
// export function fetchUsersThunk() {
//   return function (dispatch) {
//     dispatch({type: 'fetchUsers/pending' });
//     fetchUsers().then((users) => {
//       dispatch({type: 'fetchUsers/success', payload: users});
//     }).catch((err) => {
//       dispatch({type: 'fetchUsers/error', payload: err, error: true});
//     });
//   }
// }
