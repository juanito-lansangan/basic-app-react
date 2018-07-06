import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 123312313,
        text: 'Eat Breakfast',
        complete: false
      },
      {
        id: 192381923,
        text: 'Play Dota',
        complete: false
      },
      {
        id: 223131313,
        text: 'Eat Lunch',
        complete: false
      },
      {
        id: 123211111,
        text: 'Go to Office',
        complete: false
      }
    ];
  }

  getAll() {
    return this.todos;
  }

  createTodo(text) {
    const id = Date.now();
    this.todos.push({
      id,
      text,
      complete: false
    });

    this.emit('change');
  }

  toggleTodo(id) {
    const todoItem = this.todos.find(item => item.id === id);
    todoItem.complete = !todoItem.complete;
    this.emit('change');
  }

  handleActions(action) {
    switch(action.type) {
      case 'CREATE_TODO': 
        this.createTodo(action.text);
        break;
      case 'TOGGLE_TODO': 
        this.toggleTodo(action.id);
        break;
      default:
        console.log('====================================');
        console.log('invalid action');
        console.log('====================================');
        break;
    }
  }
}

const todoStore = new TodoStore();
// window.todoStore = todoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;