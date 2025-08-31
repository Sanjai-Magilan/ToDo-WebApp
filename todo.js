const mongoose = require('mongoose');
const { Schema } = mongoose;
const todoSchema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

// Create a model from the schema
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;





