import React, { Component } from 'react'

class Form extends Component {
  initialState = {
    name: '',
    category: '',
  }

  state = this.initialState


handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, category } = this.state;
  
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          id="categroy"
          value={category}
          onChange={this.handleChange} />
          <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}
  
  export default Form;