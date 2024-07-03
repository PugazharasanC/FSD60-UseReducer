// import React from "react";?

import ToDoList from "./Components/ToDoList";

const App = () => {
  return (
    <div className="container">
      <div
        className="app d-flex justify-content-center align-items-center flex-column "
        style={{ height: "100vh" , width:"90vw"}}
      >
        <h1 className="text-center"> ToDo&apos;s Manager </h1>
        <ToDoList />
      </div>
    </div>
  );
};

export default App;
