import { Component } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

export default class Todos extends Component {
  state = {
    inputValue: '',
    // todos: [
    //   {
    //     id: Math.random(),
    //     title: 'ABC',
    //     completed: true,
    //   }, 
    //   {
    //     id: Math.random(),
    //     title: 'ABC',
    //     completed: false,
    //   }
    // ]
    todos: (new Array(10_000)).fill({}).map((t, i) => ({id: i+1, title: 'ABC', completed: false}))
  }

  handleNewTodoAdd = (todo) => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, {
        id: Math.random(),
        title: todo,
        completed: false,
      }],
    });
  }

  handleNewTodoChange = (val) => {
    this.setState({
      inputValue: val,
    });
  }

  handleDeleteItem = () => {
      
  }

  render() {
    const { inputValue, todos } = this.state;

    return (
      <div className="Todos">
        <TodoForm newTodoInput={inputValue} onNewTodoAdd={this.handleNewTodoAdd} onNewTodoChange={this.handleNewTodoChange} />
        <TodoList count={todos.length} items={todos} onDeleteItem={this.handleDeleteItem} />
      </div>
    );
  }
}
