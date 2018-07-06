import React, { Component } from 'react';
import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';
import * as TodoActions from '../actions/TodoActions';

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAll()
    };
  }

  componentWillMount() {
    TodoStore.on('change', () => {
      this.setState({
        todos: TodoStore.getAll(),
      });
    });
  }

  createTodo(e) {
    e.preventDefault();
    const { txtTodo } = this.form;
    TodoActions.createTodo(txtTodo.value);
    txtTodo.value = '';
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo} />
    });

    return (
      <div className={"Todos-container"}>
        <h1>Todos</h1>
        <ul className={"list-group"}>{TodoComponents}</ul>
        <form className={"Todo-form"} onSubmit={this.createTodo.bind(this)} ref={form => this.form = form}>
          <div className={"input-group mb-3"}>
            <input type="text" className="form-control" placeholder="Enter your todo title" autoComplete="off" name="txtTodo" />
            <div className={"input-group-append"}>
              <button className={"btn btn-primary"} type="button">Add</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Todos;
