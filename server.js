const express = require("express");
const connectDB = require("./db/database");

connectDB();
const PORT = 5500;
const app = express();
app.use(express.json());
const route = require("./router/routes");
app.use("/todo", route);
console.log("NODE_ENV:", process.env.NODE_ENV);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

