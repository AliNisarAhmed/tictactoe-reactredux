import React from 'react'
import { connect } from 'react-redux';
import { turnAction, changeGameStatus, checkForWin } from './Redux/actionCreators';

class Cell extends React.Component {
  
  state = {
    frozen: false
  }

  clickHandler = () => {
    console.log(this.props.name);
    if (!this.props.frozen) {
      this.props.handleClick(this.props.name);
    }
  }

  render() {
    const { name, handleClick, activePlayer, mark } = this.props;

    return (
      <div className="cell" onClick={this.clickHandler}>
        { mark }
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
    dispatch(checkForWin())
  },
  changeGameStatus: function(status) {
    dispatch(changeGameStatus(status));
  } 
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
