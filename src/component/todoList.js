import React, { Component } from "react";
import TodoListItem from "./TodoListItem";

export default class TodoList extends Component {
  render() {
    const {
      items,
      clearTodos,
      handleDelete,
      handleEdit,
      handleComplete
    } = this.props;

    return (
      <div className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo List</h3>
        {items &&
          items.map(item => {
            return (
              <TodoListItem
                key={item.id}
                title={item.title}
                handleDelete={() => {
                  handleDelete(item.id);
                }}
                handleEdit={() => handleEdit(item.id)}
                handleComplete={() => handleComplete(item.id)}
                completed={item.completed}
              />
            );
          })}
        <button className="btn btn-danger btn-danger mt-5" onClick={clearTodos}>
          Clear List
        </button>
      </div>
    );
  }
}
