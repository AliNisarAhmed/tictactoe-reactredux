import React, { Component } from 'react'
import Cell from './Cell';
import { connect } from 'react-redux';
import { turnAction } from './Redux/actionCreators';

export default class Grid extends Component {
  render() {
    return (
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
    );
  }
}

// const mapStateToProps = (state) => ({
//   activePlayer: state.activePlayer
// });

const mapDispatchToProps = (dispatch) => ({
  handleClick: function(name) {
    return dispatch(turnAction(name))
  } 
});

const ConnectedCell = connect(null, mapDispatchToProps)(Cell);
