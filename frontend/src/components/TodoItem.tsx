import {FC} from 'react'

const TodoItem: FC = ({todo}) => {
    return (
        <div className="todo">
            <h2>{todo}</h2>
            <button className='close'>X</button>
        </div>
    )
} 

export default TodoItem