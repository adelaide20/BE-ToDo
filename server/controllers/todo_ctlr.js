const Todo = require('../models/todo_model');

// add an item to the todo's db
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

// get all items from the todo's db
const getTodos = async(req, res) => {
    const todos = await Todo.find();
    res.status(200).json(todos)
}

// update an item 
const updateTodo = async(req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        res.status(400);
        throw new Error(`Item with id ${req.params.id}
                not found`);
    }

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedTodo);
}

// delete an item
const deleteTodo = async(req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        res.status(400);
        throw new Error('Item not found');
    }

    await Todo.findById(todo)
        .then(todo => todo.remove())
        .then(todo =>
            res.status(201).json({ message: "Item successfully deleted", todo })
        )
        .catch(error =>
            res
            .status(400)
            .json({ message: "An error occurred", error: error.message })
        )
}




module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo
}