const express = require("express");
const connectDB = require("./db/database");
const Todo = require("./models/todo"); // import schema
require("dotenv").config();
connectDB();
const PORT= 5500
const app = express();
app.use(express.json());
const route = require("./router/routes")
app.use("/todo",route)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
