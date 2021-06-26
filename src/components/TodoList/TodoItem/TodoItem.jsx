import React from 'react'
import s from './TodoItem.module.css'

function TodoItem({ todo, onChange }) {
   console.log(todo)
   return (
      <div className={s.todoItem}>
         <li>
            <span>
               <input type="checkbox"
                  onChange={() => onChange(todo.id)} />

               <strong>{todo.id + ' '}</strong>
               {todo.title}
            </span>
            <button>&times;</button>
         </li>
      </div>
   )
}

export default TodoItem
