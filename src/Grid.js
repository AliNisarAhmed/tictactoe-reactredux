import React, { Component } from 'react'
import Cell from './Cell';
import GameStatus from './GameStatus';
import { connect } from 'react-redux';
import { turnAction, changeGameStatus } from './Redux/actionCreators';

export default class Grid extends Component {
  render() {
    return (
      <div>
        <GameStatus />
        <div className="gridBoard">
          <ConnectedCell name="1"/>
          <ConnectedCell name="2"/>
          <ConnectedCell name="3"/>
          <ConnectedCell name="4"/>
          <ConnectedCell name="5"/>
          <ConnectedCell name="6"/>
          <ConnectedCell name="7"/>
          <ConnectedCell name="8"/>
          <ConnectedCell name="9"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  activePlayer: state.activePlayer,
  frozen: state.frozen[ownProps.name],
  mark: state.cells[ownProps.name],
  gameStatus: state.gameStatus
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: function(name) {
    // console.log(`click occurred on ${name}`);
    dispatch(turnAction(name))
  },
  changeGameStatus: function(status) {
    dispatch(changeGameStatus(status));
  } 
});

const ConnectedCell = connect(mapStateToProps, mapDispatchToProps)(Cell);
