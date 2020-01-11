import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  const date = new Date()
  const hours = date.getHours()

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

        </p>

        let timeOfDay

        if(hours < 12) {
          timeOfDay = "morning"
        else if (hours >= 12 && hours < 17){
          timeOfDay = "afternoon"
        } else {
          timeOfDay = "night"
        }

      </div>
    );
  }
}

export default App;
