const express = require("express");
const connectDB = require("./db/database");
const Todo = require("./models/todo"); // import schema
require("dotenv").config();
connectDB();
const app = express();
app.use(express.json());

// DB connection

// Routes
app.post("/todos", async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).send(todo);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findOne({ id: id });
  if (!todo) {
    res.status(404).send("task not found");
  }
  res.status(200).send(todo);
});

app.delete("/todo/delete/:id", async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.deleteOne({ id: id });
  if (!todo) {
    res.status(404).send("task not found");
  }
  res.status(200).send(todo);
});

app.put("/todo/update/:id", async (req, res) => {
  const id = req.params.id;
  const updates = req.body; // JSON with fields to update

  try {
    const todo = await Todo.findOneAndUpdate({ id: id }, updates, {
      new: true,
    });

    if (!todo) return res.status(404).send("Todo not found");

    res.status(200).send(todo);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
