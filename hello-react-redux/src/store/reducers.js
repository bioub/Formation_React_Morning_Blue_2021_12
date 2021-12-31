import { createReducer } from "@reduxjs/toolkit";
import { decrement, fetchUsersThunk, increment, setPrenom } from "./actions.js";

const initialState = {
  count: 0,
  prenom: '',
  users: {
    loading: false,
    items: [],
  }
};

// export function reducer(state = initialState, action) {
//   return {
//     ...state,
//     count: countReducer(state.count, action),
//     prenom: prenomReducer(state.prenom, action),
//   };
// }

// export const reducer = combineReducers({
//   count: countReducer,
//   prenom: prenomReducer,
//   // todos: combineReducers({
//   //   items: todosItemsReducer,
//   //   newTodo: todosNewTodoReducer,
//   // }),
// });


// export function countReducer(state = initialState.count, action) {
//   if (action.type === INCREMENT) {
//     return state + action.payload;
//   }

//   if (action.type === DECREMENT) {
//     return state - action.payload;
//   }

//   return state;
// }

export const countReducer = createReducer(initialState.count, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

// export function prenomReducer(state = initialState.prenom, action) {
//   if (action.type === SET_PRENOM) {
//     return action.payload;
//   }

//   return state;
// }

export const prenomReducer = createReducer(initialState.count, {
  [setPrenom]: (state, action) => action.payload,
});

export const usersReducer = createReducer(initialState.users, {
  [fetchUsersThunk.pending]: (state, action) => ({...state, loading: true}),
  [fetchUsersThunk.fulfilled]: (state, action) => ({...state, loading: false, items: action.payload}),
  [fetchUsersThunk.rejected]: (state, action) => ({...state, loading: false, items: [], error: action.payload}),
});
