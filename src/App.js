import React from 'react';
import Grid from './Grid';
import Scoreboard from './Scoreboard';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <div className="details">
          <h1>Tic Tac Toe</h1>
        </div>
        <Scoreboard />
        <Grid />
      </div>
    );
  }
}

export default App;