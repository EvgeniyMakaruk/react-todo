import React from 'react'
import s from './AddTodo.module.css'

function useInputValue(defauldValue = '') {
   const [value, setValue] = React.useState(defauldValue)
   return {
      bind: {
         value,
         onChange: event => setValue(event.target.value)
      },

      clear: () => setValue(''),
      value: () => value

   }
}


function AddTodo({ onCreate }) {
   const input = useInputValue('')

   function submitHandler(event) {
      event.preventDefault()

      if (input.value().trim()) {
         onCreate(input.value())
         input.clear()
      }
   }
   return (
      <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler} className={s.form} >
         <input {...input.bind} />
         <button type='submit'>add</button>
      </form>
   )
}

export default AddTodo
