import React from "react";
import TodoList from "./components/TodoList/TodoList";
import Context from './context'

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'купить хлеб' },
    { id: 2, completed: false, title: 'купить молоко' },
    { id: 3, completed: false, title: 'купить омывайку' }
  ])

  function onToggle(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React todo</h1>
        {
          todos.length ? <TodoList todos={todos} onToggle={onToggle} /> :<p>no todos</p>
        }
        
      </div>
    </Context.Provider>
  );
}

export default App;
