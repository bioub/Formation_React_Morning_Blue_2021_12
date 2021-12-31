const { memoize } = require('lodash')

const todos = (new Array(10_000_000)).fill({}).map((todo) => ({completed: Math.random() >= 0.5}))

var state = {
  items: todos,
  filter: 'Completed',
};

function itemsSelector(state) {
  switch (state.filter) {
    case 'Completed':
      return state.items.filter((t) => t.completed);
    case 'Active':
      return state.items.filter((t) => !t.completed);
    default:
      return state.items;
  }
}

const itemsSelectorMemo = memoize(itemsSelector);

console.time('itemsSelector')
var items = itemsSelectorMemo(state)
console.log(items.length);
console.timeEnd('itemsSelector')

state = {
  ...state,
  filter: 'Active',
}

console.time('itemsSelector')
var items = itemsSelectorMemo(state)
console.log(items.length);
console.timeEnd('itemsSelector')
