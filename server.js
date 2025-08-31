const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./todo'); // import schema

const app = express();
app.use(express.json());

// DB connection
mongoose.connect("mongodb+srv://sanjai_db_user:yvOhfgYowDbobszR@cluster0.tv2plhz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Routes
app.post('/todos', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).send(todo);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

app.listen(3000, () => console.log("Server running on port 3000"));
