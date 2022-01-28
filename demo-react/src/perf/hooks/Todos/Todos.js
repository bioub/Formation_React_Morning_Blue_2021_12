import { useCallback, useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';


export default function Todos() {
  const [inputValue, setInputValue] = useState('');
  // const [todos, setTodos] = useState((new Array(10_000)).fill({}).map((t, i) => ({id: i+1, title: 'ABC', completed: false})));
  const [todos, setTodos] = useState((new Array(2)).fill({}).map((t, i) => ({id: i+1, title: 'ABC', completed: false})));

  function handleNewTodoAdd(todo) {
    setTodos([...todos, {
      id: Math.random(),
      title: todo,
      completed: false,
    }])
  }

  function handleNewTodoChange(val) {
    setInputValue(val);
  }

  

  // const todosCompleted = useMemo((todos) => todos.filter(t => t.completed), [todos]);

  // const handleDeleteItemMemo = useMemo(() => function handleDeleteItem() {}, []);
  const handleDeleteItemMemo = useCallback(function handleDeleteItem() {}, []);

  return (
    <div className="Todos">
      <TodoForm newTodoInput={inputValue} onNewTodoAdd={handleNewTodoAdd} onNewTodoChange={handleNewTodoChange} />
      <TodoList count={todos.length} items={todos} onDeleteItem={handleDeleteItemMemo} />
    </div>
  );
}