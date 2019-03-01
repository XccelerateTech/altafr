import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleClickPlus = () => {
    let count = this.state.count + 1;
    this.setState({
      count: count
    });
  };
  handleClickMinus = () => {
    let count = this.state.count - 1;
    this.setState({
      count: count
    });
  };

  render() {
    return (
      <div>
        <h5>{(this.props.name === '')? 'Counter': this.props.name + `'s Counter`}: {this.state.count}</h5>
        <button onClick={this.handleClickPlus}>+</button>
        <button onClick={this.handleClickMinus}>-</button>
      </div>
    );
  }
}
