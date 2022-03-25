const Todo = require('../models/todoModel')

const getTodos = async (req, res) => {
    // TODO: to get the todos of the logged in user only
    const todos = await Todo.find({ todo: req.params.todo })
    res.status(200).json(todos)
}

const setTodo = async (req, res) => {
    // TODO: if the user is not logged in then dont add todo else send msg to login 
    if (!req.body.todo)
        res.status(400).json({ error: "Please add todo item" })

    const todo = await Todo.create({ todo: req.body.todo, })
    res.status(200).json(todo)
}

const updateTodo = async (req, res) => {
    // TODO: user logged in ?
    const todo = await Todo.findById(req.params.id)

    if (!todo)
        res.status(400).json({ error: `${req.params.id} not found` })

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedTodo)
}

const deleteTodo = async (req, res) => {
    // TODO: use logged in ?
    const todo = await Todo.findById(req.params.id)

    if (!todo)
        res.status(400).json({ error: "Todo not found" })

    await todo.remove()
    res.status(200).json({ id: `Successfully removed ${req.params.id}` })
}

module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo
}
