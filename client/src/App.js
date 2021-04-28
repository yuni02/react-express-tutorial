import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers/customers.js';
import Hotels from './Hotels';

class App extends Component {
  render() {
    return (
      <div className="App">
     
        <Customers />
        <Hotels/>
      </div>
    );
  }
}

export default App;