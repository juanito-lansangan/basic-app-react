import React, { Component } from 'react';
import * as TodoActions from '../actions/TodoActions';

class Todo extends Component {

  markAsDone(e) {
    TodoActions.toggleTodo(this.props.id);
  }

  render() {
    const { complete, text } = this.props;
    const styleActive = complete ? "list-group-item done" : "list-group-item";
    
    return (
      <li className={styleActive}>
        <span style={{
          textDecoration: complete ? 'line-through' : 'none'
        }}>{text}</span>
        <span className={"check"} onClick={this.markAsDone.bind(this)}>
          <i className={"fas fa-check"}></i>
        </span>
      </li>
    );
  }
}

export default Todo;
