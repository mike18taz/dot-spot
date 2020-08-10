import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './App';
//import Selected from './Selected';
import * as serviceWorker from './serviceWorker';

var proxyURL = "https://regis-practicum.herokuapp.com"
var url = window.location.pathname

if(url === "/login") {
  ReactDOM.render(
    <React.StrictMode>
    <div className="container">
        <h2>Hi Michael!</h2>
        <h3>MyConnections (stories are listed here)</h3>
        <h4>MyNotebook: (dots and connectors listed here)</h4>
        <a href="/dots">Get Started</a>
    </div>
    </React.StrictMode>,
  document.getElementById('root')
);

fetch(proxyURL + '/users/login', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: {
  "email": "chiefdowns@gmail.com",
  "password": "regis123"
}
})


} else if(url === "/register") {
  ReactDOM.render(
    <React.StrictMode>
    <div className="container">
        <h2>Hi Guest!</h2>
        <h3>Ability to register coming soon!</h3>
        <a href="/">Return Home</a>
    </div>
    </React.StrictMode>,
  document.getElementById('root')
);
} else {

ReactDOM.render(
  <React.StrictMode>
    
    <h3>View by Category</h3>
    <a href="/dots">View All Dots</a>
    <br/>
    <a href="/dots/category/idea">View Idea Dots</a>
    <br/>
    <a href="/dots/category/person">View Person Dots</a>
    <br/>
    <a href="/dots/category/place">View Place Dots</a>
    <br/>
    <a href="/dots/category/thing">View Thing Dots</a>
    <br/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
}
serviceWorker.unregister();

