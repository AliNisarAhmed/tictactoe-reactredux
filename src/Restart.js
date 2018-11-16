import React from 'react'
import { connect } from 'react-redux'; 
import { restart } from './Redux/actionCreators';

function Restart({ gameStatus, restartGame }) {
  return (
    gameStatus === 'statusWin' || gameStatus === 'statusDraw' ?
    <button className="restart" onClick={restartGame}>Restart Game?</button> :
    null
  );
}

function mapStateToProps(state) {
  return {
    gameStatus: state.gameStatus
  };
}

function mapDispatchToAction(dispatch) {
  return {
    restartGame (){
      dispatch(restart())
    } 
  };
}

export default connect(mapStateToProps, mapDispatchToAction)(Restart);
