import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      todoItem: "",
      id: uuid(),
      editItem: false,
      error: ""
    };
  }
  handleChange = event => {
    this.setState({
      todoItem: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newTodo = {
      id: this.state.id,
      title: this.state.todoItem,
      completed: false
    };

    // add the object to the array in the state using the spread operator
    if (this.state.todoItem) {
      const updatedArray = [...this.state.todoItems, newTodo];
      this.setState({
        todoItems: updatedArray,
        todoItem: "",
        id: uuid(),
        editItem: false,
        error: ""
      });
    } else {
      this.setState({ error: "Please fill in a valid to-do" });
    }
  };
  clearTodos = () => {
    this.setState({ todoItems: "" });
  };
  handleDelete = id => {
    const filteredTodos = this.state.todoItems.filter(item => item.id !== id);
    this.setState({
      todoItems: filteredTodos
    });
  };
  handleEdit = id => {
    //return all todos that dont match the id provided
    const filteredTodos = this.state.todoItems.filter(item => item.id !== id);
    //find the todo that matches the id passes and return it
    const selectedTodo = this.state.todoItems.find(item => item.id === id);
    //remove the todo that matches the id from the list of todos
    this.setState({
      todoItems: filteredTodos,
      todoItem: selectedTodo.title, //title because that is what was inputed
      editItem: true,
      id: id
    });
  };

  handleComplete = id => {
    const selectedTodo = this.state.todoItems.find(item => item.id === id);

    selectedTodo.completed = !selectedTodo.completed;
    this.setState({
      todoItems: this.state.todoItems
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h2 className="text-capitalize text-center">app</h2>
            <TodoInput
              todoItem={this.state.todoItem}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
              error={this.state.error}
            />
            <TodoList
              items={this.state.todoItems}
              clearTodos={this.clearTodos}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleComplete={this.handleComplete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
