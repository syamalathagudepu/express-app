const app = require("./app");

// start the server to listen for requests
app
.listen(3001, "localhost", () => {
    console.log("server is running on http://localhost:3001");
})