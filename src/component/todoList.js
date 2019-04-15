import React, { Component } from "react";
import TodoListItem from "./TodoListItem";

export default class TodoList extends Component {
  render() {
    return (
      <div className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo List</h3>
        <TodoListItem />
        <button className="btn btn-danger btn-danger mt-5">Clear List</button>
      </div>
    );
  }
}
