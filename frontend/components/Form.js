import React from 'react'

export default class Form extends React.Component {
  state = {
    input: ''
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddTask(this.state.input)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange = {this.handleChange}
          type = 'text'
          name = 'task'
          />
          <button>Add to Todo List</button>
      </form>
    )
  }
}
