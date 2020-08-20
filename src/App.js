import React, { Component } from 'react';
import Table from './Table';
import TableSelected from './TableSelected';
import Form from './form';
//import Selected from './Selected';
import './App.css';

//var currentUrl = ""

const proxyURL = "https://regis-practicum.herokuapp.com"

class App extends Component {
  

  state = {
      dots:
        {aDots: [{"name":"place2","category":"place"},
              {"name":"thing2","category":"thing"},
              {"name":"idea2","category":"idea"}],
        sDots: [],
        },
      account:
        {connections:
          {dots: [{"name":"place2","category":"place"},
                {"name":"thing2","category":"thing"},
                {"name":"idea2","category":"idea"}],
          lines: [],
          },
        },
  }
    //} [{"name":"idea1","category":"idea"},
    //{"name":"place1","category":"place"},
    //{"name":"thing1","category":"thing"}
    //],
    
    

  componentDidMount() {
    var connectionsURL = "https://regis-practicum.herokuapp.com/connections"
    var connections = []
    fetch(connectionsURL)
      .then(result => result.json())
      .then(result => {
        this.connections = result
      })


    var url = proxyURL + window.location.pathname
    console.log(url)
    //currentUrl = url

    //const { handle } = this.props.location.state
    /*
    if(url == "/hi") {
      fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({dots:
          {
          aDots: result, sDots: []
          }
        })
      })
    
    } else {
      */
    
//alert(url)
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({dots:
          {
          aDots: result, sDots: []
          },
          connections: connections
        })
      })
    //}
    
  }
  
  
  handleSave = dot => {
    const { sDots } = this.state.dots.sDots

    //var data = new FormData();
    //data = dots.sDots
    var newData = JSON.stringify(dots.aDots.concat(dots.sDots))
    console.log(newData)
 

    fetch('/dots', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: newData
    })
    
    alert("Feature coming soon!")
  }

  handleAdd = dot => {
    const { dots } = this.state

    //var data = new FormData();
    //data = dots.sDots
    var newData = JSON.stringify(dots.aDots.concat(dots.sDots))
    var newData2 = JSON.stringify(dots.sDots)
    console.log(newData2)
 

    fetch(proxyURL +'/dots', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: newData2
    })
    alert(newData2)
    alert("Dots saved to Database!")

    //fetch('/dots', {
    //method: 'POST',
    //body: data
    //[...dots.sDots]
    //})
  }
  
  handleSubmit = dot => {
    const { dots } = this.state
    var newSdot = dot
    this.setState({dots: 
      { 
        aDots: dots.aDots, 
        sDots: [...dots.sDots, dot], 
      }
    })
  }

  selectDot = index => {
    const { dots } = this.state
  
    var newSdot = dots.aDots.filter((dot, i) => {
      return i === index
    })


    this.setState({dots:
      {
        aDots: dots.aDots.filter((dot, i) => {
          return i !== index
        }),
        sDots: dots.sDots.concat(newSdot),
      }
    })
    console.log(dots)

  }

  removeDot = index => {
    const { dots } = this.state
    console.log(dots)
    var removeSdot = dots.sDots.filter((dot, i) => {
      return i === index
    })

    this.setState({dots:
      {
        aDots: dots.aDots.concat(removeSdot).sort(),
        sDots: dots.sDots.filter((dot, i) => {
          return i !== index
        }),
      }
    })
  }

  render() {
    const { dots } = this.state
    //console.log(dots)
    //const { aDots } = dots
    //console.log(aDots)
    //const { aDots } = this.state.aDots
    //const { sDots } = this.state.sDots
    //const { sDots } = dots.sDots
/*
    if (currentUrl == "/hi") {
      return (
        <div className="container">
            <h2>Hi Michael!</h2>
            <h3>Your Connections (stories are listed here)</h3>
            <a href="/dots">Get Started</a>
        </div>
    )
    } else {
      */
    return (
        <div className="container">
            <h2>Available Dots</h2>
            <Table dotData={dots.aDots.sort()} selectDot={this.selectDot} />
            <h2>Selected Dots</h2>
            <TableSelected dotData={dots.sDots.sort()} removeDot={this.removeDot} />
            <button onClick={this.handleSave}>Save Dots to MyNotebook</button>
            <h2>Add a Dot</h2>
            <Form handleSubmit={this.handleSubmit} />
            <br/>
            <button onClick={this.handleAdd}>Add New Dots to Database</button>
            
        </div>
    )
   // }
  }
}



export default App;
