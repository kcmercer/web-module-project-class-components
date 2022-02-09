import React from 'react';
import axios from 'axios';

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
  }];

  // const URL = 'http://localhost:9000/api/todos/'

export default class App extends React.Component {
  state = {
    todo: initialState,
    todo2: []
  };

  componentDidMount() {
    axios.get('http://localhost:9000/api/todos')
      .then(resp => {
        console.log(resp.data.data)
        this.setState({
          ...this.state,
          todo: resp.data.data
        })
        console.log(this.state)
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleAddTask = taskName => {
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    }
    // console.log(this.state.todo)

    axios.post('http://localhost:9000/api/todos', newTask)
      .then(resp => {
        // console.log(resp.data.data)
        this.setState({ todo: [...this.state.todo, resp.data.data]})
        })
      .catch(error => {
        console.log(error)
        })
    }

  handleToggleTask = (selectedTask) => {
    // this.setState({
    //   ...this.state,
    //   todo: this.state.todo.map(task => {
    //     if(task.id === selectedTask.id) {
    //       return({
    //         ...task,
    //         completed: !task.completed
    //       })
    //     } else {
    //       return task;
    //     }
    //   })
    // })
    axios.patch(`http://localhost:9000/api/todos/${selectedTask}`, {
      completed: !this.completed
    })
    .then(resp => {
      console.log(resp.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleClearTasks = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(task => {
        return !task.completed;
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
          <button onClick={this.handleClearTasks}>Clear Completed Tasks</button>
        </div>
      </>
    )
  }
}
