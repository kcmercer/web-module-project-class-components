import React from 'react'

import Form from './Form';

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
  render() {
    return (
      <>
        <div>
          <h2>Todo List: MVP</h2>
        </div>
        <div>
          <Form handleAddTask={this.handleAddTask} />
          <button>Clear Completed Tasks</button>
        </div>
      </>
    )
  }
}
