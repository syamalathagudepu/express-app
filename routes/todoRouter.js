// import express

const express = require ("express");
const {getAllTodos, createTodo, updateTodo, deleteTodo} = 
require("../controllers/todoController.js");

// create a router
const todoRouter = express.Router();


// define the routes
todoRouter.get("/" , getAllTodos);

todoRouter.post("/" , createTodo);

todoRouter.put("/" , updateTodo);

todoRouter.delete("/" , deleteTodo);

// export the router
module.exports = todoRouter;
