import React from 'react'
import { connect } from 'react-redux';
import { turnAction, checkGameStatus } from './Redux/actionCreators';

class Cell extends React.Component {

  clickHandler = () => {
    if (!this.props.frozen) {
      this.props.handleClick(this.props.name);
    }
  }

  render() {
    const { mark } = this.props;

    return (
      <div className="cell" onClick={this.clickHandler}>
        { mark }
      </div>
    );
  }
}



const mapStateToProps = (state, ownProps) => ({
  frozen: state.frozen[ownProps.name],
  mark: state.cells[ownProps.name],  // The mark to be displayed inside the cell after the players takes a turn
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: function(name) {
    // when a cell is clicked, we dispatch two actions, one to account for the turn, one to check for win conditions
    // and update game conditions accordingly
    dispatch(turnAction(name))
    dispatch(checkGameStatus())
  } 
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
