import React from 'react'
import s from './TodoList.module.css'
import TodoItem from './TodoItem/TodoItem'

function TodoList({ todos, onToggle }) {


   return (
      <div className={s.todoList}>
         <ul>
            {
               todos.map(todo => <TodoItem key={todo.id} todo={todo} onChange={onToggle} />)
            }

         </ul>
      </div>
   )
}

export default TodoList
