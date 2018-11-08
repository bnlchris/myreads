import React, { Component } from 'react';
import './App.css';
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'

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

        <div>
          <WantToRead/>
        </div>

        <div>
          <Read/>
        </div>

      </div>
    );
  }
}

export default App;
