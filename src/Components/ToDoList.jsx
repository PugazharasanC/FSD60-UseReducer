import { useEffect, useReducer } from "react";
import AddTodo from "./AddTodo";
import ToDo from "./ToDo";
import ToDoReducer from "../Reducers/ToDoReducer";
import axios from "axios";

const ToDoList = () => {
  const [todos, dispatch] = useReducer(ToDoReducer, []);

  useEffect(() => {
    axios
      .get("/")
      // .then((res) => res.json())
      .then((res) => {
        // console.log(data)
        dispatch({ type: "INIT_TODOS", payload: res.data });
      });
  }, []);

  const addTodos = (todo) => {
    axios.post("/", todo).then((res) => {
      // console.log(res);
      dispatch({ type: "ADD_TODO", payload: res.data });
    });
  };

  const toggleCompleted = (id) => {
    const todo = todos.filter((todo) => todo.id == id)[0];
    todo.completed = !todo.completed;
    // fetch("https://6671155ae083e62ee439f74b.mockapi.io/api/v1/todos/" + id, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(todo),
    // })
    // .then((res) => res.json())
    axios.put("/" + id, todo).then((res) => {
      dispatch({ type: "UPDATE_TODO", payload: res.data });
    });
  };
  const deleteTodo = (id) => {
    // fetch("https://6671155ae083e62ee439f74b.mockapi.io/api/v1/todos/" + id, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    axios.delete("/" + id).then((res) => {
      dispatch({ type: "DELETE_TODO", payload: res?.data?.id });
    });
    // dispatch({ type: "DELETE_TODO", payload: id });
  };
  const updateTodo = (id, text) => {
    const todo = todos.filter((todo) => todo.id == id)[0];
    todo.text = text;
    // fetch("https://6671155ae083e62ee439f74b.mockapi.io/api/v1/todos/" + id, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(todo),
    // })
    //   .then((res) => res.json())
    axios.put("/" + id, todo).then((res) => {
      dispatch({ type: "UPDATE_TODO", payload: res.data });
    });
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
