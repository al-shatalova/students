import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoList: ['todo1', 'todo2'] };
  }

  addTodo = (todo) => {
    const { todoList } = this.state;
    const newTodoList = todoList.slice();
    newTodoList.push(todo);
    this.setState({ todoList: newTodoList });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          padding: '8px 16px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            width: '80%',
          }}
        >
          <div
            style={{
              margin: '0 auto',
              width: '40%',
            }}
          >
            <TodoInput submitFn={this.addTodo} />
          </div>
          <div
            style={{
              margin: '0 auto',
              width: '60%',
            }}
          >
            <TodoList todoList={this.state.todoList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
