import { useReducer } from "react";
import AddTodo from "./AddTodo";
import ToDo from "./ToDo";
import ToDoReducer from "../Reducers/ToDoReducer";

const ToDoList = () => {
  const [todos, dispatch] = useReducer(ToDoReducer, []);

  const addTodos = (todo) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const toggleCompleted = (id) => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };
  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  const updateTodo = (id, text) => {
    dispatch({ type: "EDIT_TODO", payload: { id, text } });
  };
  return (
    <>
      <div className="row w-75">
        <AddTodo addTodos={addTodos} />
      </div>
      <br />
      {todos.map((todo) => (
        <div className="row w-100" key={todo.id}>
          <ToDo
            {...todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        </div>
      ))}
    </>
  );
};

export default ToDoList;
