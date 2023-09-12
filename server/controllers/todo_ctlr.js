const Todo = require('../models/todo_model');

const getTodos = async(req, res) => {
    res.status(200).json({ message: 'Get todos' })
}

const setTodo = async(req, res) => {
    const { category, title, description } = req.body

    if (!category || !title || !description) {
        res.status(400);
        throw new Error('Please add all the fields');
    }
    const todo = await Todo.create({
        // text: req.body.text,
        category: req.body.category,
        title: req.body.title,
        description: req.body.description
    });
    res.status(200).json(todo)
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