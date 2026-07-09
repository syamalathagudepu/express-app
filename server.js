// import express

const express = require ('express');

// create express app
const app = express();

// define the routes
app.get("/" , (request, response) => {
    response.send("Hello World!");
});

// start the server to listen for requests
app
.listen(3001, "localhost", () => {
    console.log("server is running on http://localhost:3001");
})