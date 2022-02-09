import React from 'react'

export default class Todo extends React.Component {
  handleClick = () => {
    this.props.handleToggleTask(this.props.task.id);
  }

  render() {
    return (
      <div onClick={this.handleClick} className={`task${this.props.task.completed ? 'completed ' : ''}`}>
        <p>{this.props.task.name}</p>
      </div>
    )
  }
}
