const express = require('express');
const port = 3000;

const app = express();

// import local files
const connectDB = require('./config/db');

connectDB();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/todos', require('./routes/todo_route'))

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});