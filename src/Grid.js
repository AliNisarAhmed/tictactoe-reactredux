import React, { Component } from 'react'
import Cell from './Cell';
import GameStatus from './GameStatus';


export default class Grid extends Component {
  render() {
    return (
      <div>
        <GameStatus />
        <div className="gridBoard">
          <Cell name="1"/>
          <Cell name="2"/>
          <Cell name="3"/>
          <Cell name="4"/>
          <Cell name="5"/>
          <Cell name="6"/>
          <Cell name="7"/>
          <Cell name="8"/>
          <Cell name="9"/>
        </div>
      </div>
    );
  }
}
