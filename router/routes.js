const express = require("express")
const route = express.Router();
const control = require("../controller/control");

route.post("/", control.Post);

route.get("/", control.GetAll);

route.get("/:id", control.GetById);

route.delete("/delete/:id", control.Delete);

route.put("/update/:id", control.Update);

module.exports = route;