import React, { Component } from "react";
import Error from "./Error";

class TodoInput extends Component {
  render() {
    const {
      todoItem,
      handleChange,
      handleSubmit,
      editItem,
      error
    } = this.props;
    return (
      <div className="card card-body my-3">
        {error ? <Error>{error}</Error> : null}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-secondary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              placeholder="Type what you would like to do here"
              value={todoItem}
              onChange={handleChange}
              type="text"
              className="form-control text-capitalize"
            />
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-block btn-primary text-white mt-3"
                : "btn btn-block btn-secondary text-white mt-3"
            }
          >
            {editItem ? "Edit " : "Add"}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
