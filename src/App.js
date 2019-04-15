import React, { Component } from "react";
import TodoInput from "./component/TodoInput";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      todoItem: "",
      id: 0,
      editItem: false
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h2 className="text-capitalize text-center">app</h2>
            <TodoInput />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
