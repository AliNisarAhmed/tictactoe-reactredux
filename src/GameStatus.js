import React from 'react';
import { connect } from 'react-redux';

function GameStatus ({ activePlayer, gameStatus }) {
  return (
    <div className={`gameStatus ${gameStatus}`}>
      {
        gameStatus === "statusTurn"
        ? `${activePlayer}'s turn`
        : (
          gameStatus === 'statusWin' ?
          `${activePlayer} wins!!!` :
          `Game Drawn :(`
        )
      }
    </div>
  )
}


function mapStateToProps(state) {
  return {
    gameStatus: state.gameStatus,
    activePlayer: state.activePlayer
  };
}

const ConnectedGameStatus = connect(mapStateToProps)(GameStatus);

export default ConnectedGameStatus;
