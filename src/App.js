import React from "react";
import TodoList from "./components/TodoList/TodoList";
import Context from './context';
import AddTodo from "./components/AddTodo";
import Modal from './modal/Modal.jsx';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'купить хлеб' },
    { id: 2, completed: false, title: 'купить масло' },
    { id: 3, completed: false, title: 'купить укроп' }
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
  
  function addTodo(title) {
    setTodos(
      todos.concat([{
        title,
        id:Date.now(),
        completed: false
      }]))

  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React todo</h1>
        <Modal/>
        <AddTodo onCreate={addTodo} />
        {
          todos.length ? <TodoList todos={todos} onToggle={onToggle} /> : <p>no todos</p>
        }

      </div>
    </Context.Provider>
  );
}

export default App;
