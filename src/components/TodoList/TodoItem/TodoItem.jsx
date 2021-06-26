import React from 'react'
import s from './TodoItem.module.css'

function TodoItem({ todo }) {
   return (
      <div className={s.todoItem}>
         <li>
            <span>
               <input type="checkbox" />
               
               <strong>{todo.id + ' '}</strong>
               {todo.title}
               </span>
            <button>&times;</button>
         </li>
      </div>
   )
}

export default TodoItem
