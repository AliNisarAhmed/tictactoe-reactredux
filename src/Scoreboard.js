import React, { Component } from 'react'
import { connect } from 'react-redux';

class Scoreboard extends Component {
  render() {
    const { X, O } = this.props.wins;
    return (
      <div className="scoreBoard">
        <span>O: {O} wins</span>
        <h2>Score Board</h2>
        <span>X: {X} wins</span>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    wins: state.wins
  };
}

export default connect(mapStateToProps)(Scoreboard);