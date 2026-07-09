// import express

const express = require ('express');

// create express app
const app = express();

// define the routes
app.get("/todos" , (request, response) => {
    response.send("GET all todos");
});

app.post("/todos" , (request, response) => {
    response.send("POST a todo");
});

app.put("/todos" , (request, response) => {
    response.send("PUT a todo");
});


app.delete("/todos" , (request, response) => {
    response.send("DELETE a todo");
});

// start the server to listen for requests
app
.listen(3001, "localhost", () => {
    console.log("server is running on http://localhost:3001");
})