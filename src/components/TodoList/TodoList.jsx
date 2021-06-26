import React from 'react'
import s from './TodoList.module.css'
import TodoItem from './TodoItem/TodoItem'

function TodoList({ todos, onToggle }) {


   return (
      <div className={s.todoList}>
         <ul>
            {
               todos.map((todo,index) => <TodoItem
                  key={todo.id}
                  todo={todo}
                  onChange={onToggle}
                  index={index}
                  
            
                   />)
            }

         </ul>
      </div>
   )
}

export default TodoList
