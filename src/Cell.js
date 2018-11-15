import React from 'react'

export default class Cell extends React.Component {
  
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
