import React from 'react'
import s from './TodoItem.module.css'

function TodoItem({ todo, onChange }) {
   const classes = []
   if (todo.completed) {
      classes.push('done')
   }

   return (
      <div className={s.todoItem}>
         <li >
            <span className={classes.join(' ')} >
               <input
                  checked={todo.completed}
                  type="checkbox"
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
