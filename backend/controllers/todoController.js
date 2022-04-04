const Todo = require('../models/todoModel')
const User = require('../models/userModel')

const getTodos = async (req, res) => {
    // TODO: to get the todos of the logged in user only
    const todos = await Todo.find({ user: req.user.id })
    res.status(200).json(todos)
}

const setTodo = async (req, res) => {
    // TODO: if the user is not logged in then dont add todo else send msg to login 
    if (!req.body.todo)
        res.status(400).json({ error: "Please add todo item" })

    const todo = await Todo.create({
        todo: req.body.todo,
        user: req.user.id
    })

    res.status(200).json(todo.todo)
}

const updateTodo = async (req, res) => {
    // TODO: user logged in ?
    const todo = await Todo.findById(req.params.id)

    if (!todo)
        res.status(400).json({ error: `${req.params.id} not found` })

    const user = await User.findById(req.user.id)
    if (!user)
        res.status(401).json({ err: "user not found" })


    if (todo.user.toString() !== user.id)
        res.status(401).json({ err: "user not authorized" })

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedTodo)
}

const deleteTodo = async (req, res) => {
    // TODO: use logged in ?
    const todo = await Todo.findById(req.params.id)

    if (!todo)
        res.status(400).json({ error: "Todo not found" })

    const user = await User.findById(req.user.id)
    if (!user)
        res.status(401).json({ err: "user not found" })


    if (todo.user.toString() !== user.id)
        res.status(401).json({ err: "user not authorized" })

    await todo.remove()
    res.status(200).json({ id: `Successfully removed ${req.params.id}` })
}

module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo
}
