// @desc    Get todos
// @route   GET /api/todo
// @access  Private
const getTodos = (req, res) => {
    res.status(200).json({ message: "Get todo" })
}

const setTodo = (req, res) => {
    if (!req.body.text) {
        res.status(400).json({ message: 'Please add text' })
        return
    }
    res.status(200).json({ message: "Set todo" })
}

const updateTodo = (req, res) => {
    res.status(200).json({ message: `Update todo ${req.params.id}` })
}

const deleteTodo = (req, res) => {
    res.status(200).json({ message: `Delete todo ${req.params.id}` })
}

module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo
}