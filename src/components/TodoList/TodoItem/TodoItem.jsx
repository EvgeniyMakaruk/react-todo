import React from 'react'
import s from './TodoItem.module.css'
import Context from '../../../context'

function TodoItem({ todo, onChange, index}) {
   console.log(index)
   
   const classes = []
   if (todo.completed) {
      classes.push('done')
   }
   const { removeTodo } = React.useContext(Context)
   return (
      <div className={s.todoItem}>
         <li >
            <span className={classes.join(' ')} >
               <input
                  checked={todo.completed}
                  type="checkbox"
                  onChange={() => onChange(todo.id)} />

               <strong>{index+1 + ' '}</strong>
               {todo.title}
            </span>
            <button onClick={() => removeTodo(todo.id)}>&times;</button>

         </li>
      </div>
   )
}

export default TodoItem
