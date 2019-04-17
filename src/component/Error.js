import React, { Component } from "react";

export default class Error extends Component {
  render() {
    return (
      <div class="bg-danger text-white-50 text-capitalize mb-4 p-3 ">
        {this.props.children}
      </div>
    );
  }
}
