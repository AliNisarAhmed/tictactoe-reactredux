import React from 'react';
import Grid from './Grid';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <div className="details">
          <h1>Tic Tac Toe</h1>
        </div>
        <Grid />
      </div>
    );
  }
}

export default App;