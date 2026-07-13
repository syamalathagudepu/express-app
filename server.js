const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); // Fix for ISP DNS blocking MongoDB SRV lookups

const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// connect to the database
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("connected to the database");
        
        app
            .listen(3001, "localhost", () => {
             console.log("server is running on http://localhost:3001");
        });
    })

    .catch((error) => {
        console.error("error connecting to the database:", error);
    });

// start the server to listen for requests
