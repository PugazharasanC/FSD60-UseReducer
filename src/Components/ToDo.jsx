import { PropTypes } from "prop-types";
import { useState } from "react";

const ToDo = ({
  id,
  text,
  completed,
  toggleCompleted,
  deleteTodo,
  updateTodo,
}) => {
  const [editText, setEditText] = useState(false);
  const [editTextValue, setEditTextValue] = useState(text);
  return (
    <>
      <div className="col">
        <input
          type="checkbox"
          className="form-check-input"
          defaultChecked={completed}
          onChange={() => {
            toggleCompleted(id);
          }}
        />
      </div>
      <div className="col">
        {editText ? (
          <input
            type="text"
            className="form-control"
            placeholder={text}
            value={editTextValue}
            onChange={(event) => {
              setEditTextValue(event.target.value);
            }}
          />
        ) : (
          <p
            className={
              completed
                ? "text-decoration-line-through"
                : "text-decoration-none"
            }
          >
            {text}
          </p>
        )}
      </div>
      <div className="col">
        <input
          type="button"
          value={editText ? "Save" : "Edit"}
          className={editText ? "btn btn-success" : "btn btn-secondary"}
          onClick={() => {
            if (editText) {
              updateTodo(id, editTextValue);
            }
            setEditText(!editText);
          }}
        />
      </div>
      <div className="col">
        <input
          type="button"
          value="Delete"
          className="btn btn-danger"
          onClick={() => {
            deleteTodo(id);
          }}
        />
      </div>
    </>
  );
};

ToDo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default ToDo;
