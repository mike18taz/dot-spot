import React, { Component } from 'react';
import Table from './TableSelected';
import './App.css';
import Form from './form';
//import App from './App';

class Selected extends Component {
  state = {
      dots: [{"name":"idea1","category":"idea"},
              {"name":"place1","category":"place"},
              {"name":"thing1","category":"thing"}
              ],
    }

  //state = App.state

  
  handleSubmit = dot => {
    this.setState({ dots: [...this.state.dots, dot] })
  }

    removeDot = index => {
      const { dots } = this.state
      this.setState({
        dots: dots.filter((dot, i) => {
          return i !== index
        }),
    })
  }

    render() {
      const { dots } = this.state
      return (
          <div className="container">
              <h2>Selected Dots</h2>
              <Table dotData={dots} removeDot={this.removeDot} />
              <Form handleSubmit={this.handleSubmit} />
          </div>
      )
  }
}



export default Selected;
