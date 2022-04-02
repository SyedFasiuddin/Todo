import { FC, useState } from 'react';

const TodoForm: FC = () => {

  const [todo, setTodo] = useState("")

  const onSubmit = (e: any) => {
    e.preventDefault()

    // TODO:
    // 1 handle addition 
    // 2 handle completion
    // 3 handle dispaly

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
          <button type="submit">Add Todo</button>
        </div>
      </form>
    </section>
  )
}

export default TodoForm