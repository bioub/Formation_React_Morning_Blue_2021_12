import { combineReducers } from "redux";
import { DECREMENT, INCREMENT, SET_PRENOM } from "./constants.mjs";

const initialState = {
  count: 0,
  prenom: '',
};

// export function reducer(state = initialState, action) {
//   return {
//     ...state,
//     count: countReducer(state.count, action),
//     prenom: prenomReducer(state.prenom, action),
//   };
// }

export const reducer = combineReducers({
  count: countReducer,
  prenom: prenomReducer,
  // todos: combineReducers({
  //   items: todosItemsReducer,
  //   newTodo: todosNewTodoReducer,
  // }),
});


export function countReducer(state = initialState.count, action) {
  if (action.type === INCREMENT) {
    return state + action.payload;
  }

  if (action.type === DECREMENT) {
    return state - action.payload;
  }

  return state;
}

export function prenomReducer(state = initialState.prenom, action) {
  if (action.type === SET_PRENOM) {
    return action.payload;
  }

  return state;
}
