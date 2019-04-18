import React, { Component } from "react";

export default class CompleteBtn extends Component {
  render() {
    const { handleToDoCompleted } = this.props;
    return (
      <div>
        <ul className="checkbox" onClick={handleToDoCompleted}>
          <li>
            <input
              type="checkbox"
              id="checkbox"
              value="Toggle All as Complete"
            />
            <label htmlFor="checkbox">Toggle All as Complete</label>
          </li>
        </ul>
      </div>
    );
  }
}
