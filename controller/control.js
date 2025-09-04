const Todo = require("../models/todo");
module.exports = {
    
  Post: async (req, res) => {           // post

  try {
    const lastTodo = await Todo.findOne().sort({ id: -1 });
    const nextId = lastTodo ? lastTodo.id + 1 : 1;
    const todo = new Todo({ ...req.body, id: nextId });

    await todo.save();
    res.status(201).send(todo);
    } catch (err) {
        res.status(400).send(err);
    }
  },

   GetAll: async (req, res) => {         // GetAll
    const todos = await Todo.find();
    res.send(todos);
  },

  GetById: async (req, res) => {        //GetById
    const id = req.params.id;
    const todo = await Todo.findOne({ id: id });
    if (!todo) {
      res.status(404).send("task not found");
    }
    res.status(200).send(todo);
  },

  Delete: async (req, res) => {         //Delete
    const id = req.params.id;
    const todo = await Todo.deleteOne({ id: id });
    if (!todo) {
    res.status(404).send("task not found");
    }
    res.status(200).send(todo);
    },

   Update: async (req, res) => {        //Update
    const id = req.params.id;
    const updates = req.body;
    try {
        const todo = await Todo.findOneAndUpdate({ id: id }, updates, { new: true, });

        if (!todo) return res.status(404).send("Todo not found");

        res.status(200).send(todo);
    } catch (err) {
        res.status(500).send(err);
    }
  }

};