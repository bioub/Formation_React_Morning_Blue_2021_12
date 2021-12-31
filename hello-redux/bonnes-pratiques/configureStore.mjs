import { reducer } from "./reducers.mjs";
import redux from 'redux';

export function configureStore() {
  /** @type {import('redux').Store} */
  const store = redux.createStore(reducer);

  return store;
}
