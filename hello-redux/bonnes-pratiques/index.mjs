import { decrement, increment, setPrenom } from "./actions.mjs";
import { configureStore } from "./configureStore.mjs";
import { countSelector, prenomSelector } from "./selectors.mjs";

const store = configureStore();

// le composant counter
store.subscribe(() => {
  console.log('composant counter', countSelector(store.getState()));
});

// le composant hello
store.subscribe(() => {
  console.log('composant hello', prenomSelector(store.getState()));
});

store.dispatch(increment());
store.dispatch(increment(10));
store.dispatch(decrement());
store.dispatch(setPrenom('Romain'));
