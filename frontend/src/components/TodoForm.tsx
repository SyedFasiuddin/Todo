import axios from 'axios';
import { FC, useState } from 'react';


export const getAllTodos = async ()  => {
  const API_URI = '/api/todo' 
  const res = await axios.get(API_URI, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}` 
      }
  } )

  return res.data
}

const TodoForm: FC = () => {

  const [todo, setTodo] = useState("")

  const onSubmit = async (e: any) => {
    e.preventDefault()

    // TODO:
    // 1 handle addition 
    // 2 handle completion
    // 3 handle dispaly

    const API_URI = '/api/todo/'

    const res = await axios.post(API_URI, {todo}, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}` 
      }
    })

    setTodo('')
  }

  return (
    <section className='todoSection'>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="Todo">Todo</label>
          <input 
            type="text" 
            name="too"
            id="todo"
            value={todo}
            onChange={e => setTodo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className='btn btn-block' type="submit">Add Todo</button>
        </div>
      </form>
    </section>
  )
}

export default TodoForm