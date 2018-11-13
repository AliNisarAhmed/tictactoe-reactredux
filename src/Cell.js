import React from 'react'

export default class Cell extends React.Component {
  
  clickHandler = () => {
    console.log(this.props.name);
    this.props.handleClick(this.props.name);
  }

  render() {
    const { name, handleClick } = this.props;
    

    return (
      <div className="cell" onClick={this.clickHandler}>
        { name }
      </div>
    );
  }
}
