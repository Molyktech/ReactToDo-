import React, { Component } from "react";

export default class TodoListItem extends Component {
  render() {
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>title</h6>
        <div className="todo-icon">
          <span className="text-success mx-2">
            <i className="fas fa-pen" />
          </span>
          <span className="text-danger mx-2">
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
