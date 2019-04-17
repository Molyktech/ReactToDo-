import React, { Component } from "react";

export default class TodoListItem extends Component {
  render() {
    const {
      title,
      handleDelete,
      handleEdit,
      handleComplete,
      completed
    } = this.props;
    console.log(completed);
    return (
      <li
        className="list-group-item text-capitalize d-flex justify-content-between my-2"
        style={{
          textDecoration: completed ? "line-through" : "none"
        }}
      >
        <h6 className={completed ? "text-danger" : ""}>{title}</h6>
        <div className="todo-icon">
          <span className="text-success mx-2" onClick={handleComplete}>
            <i className="fas fa-check" />
          </span>
          <span className="text-success mx-2" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="text-danger mx-2" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
