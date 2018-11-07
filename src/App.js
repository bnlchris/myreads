import React, { Component } from 'react';
import './App.css';
import CurrentlyReading from './CurrentlyReading'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <h1>
            MyReads
          </h1>
        </header>

        <div>
          <CurrentlyReading/>
        </div>

      </div>
    );
  }
}

export default App;
