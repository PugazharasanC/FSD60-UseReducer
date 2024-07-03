import { useState } from "react";
import PropTypes from "prop-types";
const AddTodo = ({ addTodos }) => {
  const [text, setText] = useState("");
  return (
    <>
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="Type Todo Here"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className="col">
        <input
          type="button"
          value="Add"
          className="btn btn-success"
          onClick={() => {
            addTodos({
              text,
              completed: false,
            });
            setText("");
          }}
        />
      </div>
    </>
  );
};

AddTodo.propTypes = {
  addTodos: PropTypes.func.isRequired,
};

export default AddTodo;
