import React from 'react'

import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.todo.map(task => (
            <Todo handleToggleTask={this.props.handleToggleTask} key={task.id} task={task} />
          ))
        }
      </div>
    )
  }
}
