import React, { Component } from "react";

class Student extends Component {
  state = {
    name: "Sanket",
  };

  render() {
    return <div>Hello {this.state.name}</div>;
  }
}

export default Student;
