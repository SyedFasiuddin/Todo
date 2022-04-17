import { FC } from 'react'

interface Props {
    todo: string,
}

const TodoItem: FC = () => {
    return (
        <div className="todo">
            <h2></h2>
            <button className='close'>X</button>
        </div>
    )
}

export default TodoItem