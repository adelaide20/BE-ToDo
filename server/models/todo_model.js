const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    category: {
        type: String,
        required: [true, 'Please add a category value'],
    },
    title: {
        type: String,
        required: [true, 'Please add a title value'],
    },
    description: {
        type: String,
        required: [true, 'Please add a description value'],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Todo', todoSchema);