import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header"></Header>
      </div>
    );
  }
}

export default App;
