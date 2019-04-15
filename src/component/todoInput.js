import React, { Component } from "react";

class TodoInput extends Component {
  state = {
    todo: ""
  };

  // handlechange = e => {
  //   this.setState({ todo: e.target.value });
  // };
  render() {
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              placeholder="Type what you would like to do here"
              // value={this.state.todo}
              // onChange={handlechange}
              type="text"
              className="form-control text-capitalize"
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-3">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
