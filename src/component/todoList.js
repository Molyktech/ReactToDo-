import React, { Component } from "react";
import TodoListItem from "./TodoListItem";
import CompleteBtn from "./CompleteBtn";

export default class TodoList extends Component {
  render() {
    const {
      items,
      clearTodos,
      handleDelete,
      handleEdit,
      handleComplete,
      handleToDoCompleted
    } = this.props;

    return (
      <div className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo List</h3>
        {items.length > 0 ? (
          <CompleteBtn handleToDoCompleted={handleToDoCompleted} />
        ) : null}
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
        {items.length > 0 ? (
          <button
            className="btn btn-danger btn-danger mt-5"
            onClick={clearTodos}
          >
            Clear List
          </button>
        ) : null}
      </div>
    );
  }
}
