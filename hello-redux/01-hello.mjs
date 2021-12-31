import redux from 'redux';

/** @type {import('redux').Store} */
const store = redux.createStore((state = {count: 0, prenom: ''}, action) => {
  if (action.type === 'increment') {
    return {
      ...state,
      count: state.count + (action.step ?? 1),
    };
  }

  if (action.type === 'decrement') {
    return {
      ...state,
      count: state.count - (action.step ?? 1),
    };
  }

  if (action.type === 'set_prenom') {
    return {
      ...state,
      prenom: action.prenom,
    };
  }

  return state;
});


store.subscribe(() => {
  console.log('subscribe', store.getState());
});

store.dispatch({type: 'increment'});
store.dispatch({type: 'increment', step: 10});
store.dispatch({type: 'decrement'});
store.dispatch({type: 'unknown'});
store.dispatch({type: 'set_prenom', prenom: 'Romain'});
