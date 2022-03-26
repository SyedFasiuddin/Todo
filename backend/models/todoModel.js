const mongoose = require('mongoose')

const todoSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        todo: {
            type: String,
            required: [true, "Please add the todo item"]
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Todo', todoSchema)