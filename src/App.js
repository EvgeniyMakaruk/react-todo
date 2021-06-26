import React from "react";
import TodoList from "./components/TodoList/TodoList";

function App() {

  const todos = [
    { id: 1, completed: false, title: 'купить хлеб' },
    { id: 2, completed: false, title: 'купить молоко' },
    { id: 3, completed: false, title: 'купить омывайку' }
  ]


  return (
    <div className="wrapper">
      <h1>React todo</h1>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
