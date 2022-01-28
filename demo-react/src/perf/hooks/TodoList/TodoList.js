import { memo } from 'react';
import TodoCount from '../TodoCount/TodoCount';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ count, items, onDeleteItem }) {
  return (
    <div>
      <div className="TodoList">
        {items.map((it) => (
          <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
        ))}
      </div>
      <TodoCount count={count} />
    </div>
  );
}

export default memo(TodoList);
