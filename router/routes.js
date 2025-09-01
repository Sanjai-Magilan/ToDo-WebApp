const express = require("express")
const route = express.Router();
const Todo = require("../models/todo");

route.post("/", async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).send(todo);
  } catch (err) {
    res.status(400).send(err);
  }
});

route.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

route.get("/:id", async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findOne({ id: id });
  if (!todo) {
    res.status(404).send("task not found");
  }
  res.status(200).send(todo);
});

route.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.deleteOne({ id: id });
  if (!todo) {
    res.status(404).send("task not found");
  }
  res.status(200).send(todo);
});

route.put("/update/:id", async (req, res) => {
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

module.exports = route;
