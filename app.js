// import express

const express = require ('express');
const todoRouter = require('./routes/todoRouter');

// create express app
const app = express();


app
.use("/todos" , todoRouter);

module.exports = app;