import React, { Component } from "react";
import { connect } from "react-redux";

import { incrementNumber, decrementNumber } from "./actions";

class Hello extends Component {
  render() {
    return (
      <div>
        <h2>This is the value:{this.props.state} </h2>
        <button onClick={() => this.props.incrementNumber(this.props.state)}>
          Increment
        </button>
        <button onClick={() => this.props.decrementNumber(this.props.state)}>
          Decrement
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}
export default connect(mapStateToProps, { incrementNumber, decrementNumber })(
  Hello
);
