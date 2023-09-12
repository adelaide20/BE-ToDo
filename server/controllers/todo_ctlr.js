const getTodos = (req, res) => {
    res.status(200).json({ message: 'Get todos' })
}

const setTodo = (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add text field');
    }
    res.status(200).json({ message: 'Set todo' })
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