import { usersReducer } from './reducer';

test('usersReducer', () => {
  const state = {
    loading: false,
    items: [],
  };

  const nextState = usersReducer(state, { type: 'USERS_FETCH/pending' });

  expect(nextState).toEqual({
    loading: true,
    items: [],
  });
  expect(nextState).not.toBe(state); // immuable
});
