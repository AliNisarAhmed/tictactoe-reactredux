import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameStatus extends Component {
  render() {
    return (
      <div className={`gameStatus ${this.props.gameStatus}`}>
        {
          this.props.gameStatus === "statusTurn"
          ? `${this.props.activePlayer}'s turn`
          : (
            this.props.gameStatus === 'statusWin' ?
            `${this.props.activePlayer} wins!!!` :
            `Game Drawn :(`
          )
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gameStatus: state.gameStatus,
    activePlayer: state.activePlayer
  };
}

const ConnectedGameStatus = connect(mapStateToProps)(GameStatus);

export default ConnectedGameStatus;
