import React from 'react'

import Form from './Form';
import TodoList from './TodoList';

const initialState = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

export default class App extends React.Component {
  state = {
    todo: initialState
  };

  handleAddTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    console.log(this.state.todo)

    this.setState({
      ...this.state,
      todo: [...this.state.todo, newTask]
    })
  }

  handleToggleTask = (selectedTask) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map(task => {
        if(task.id === selectedTask.id) {
          return({
            ...task,
            completed: !task.completed
          })
        } else {
          return task;
        }
      })
    })
  }


  render() {
    return (
      <>
        <div>
          <h2>Todo List: MVP</h2>
          <TodoList handleToggleTask={this.handleToggleTask} handleAddTask={this.handleAddTask} todo={this.state.todo}/>
        </div>
        <div>
          <Form handleAddTask={this.handleAddTask} />
          <button>Clear Completed Tasks</button>
        </div>
      </>
    )
  }
}
