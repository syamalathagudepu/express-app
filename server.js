const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); // Fix for ISP DNS blocking MongoDB SRV lookups

const app = require("./app");
const mongoose = require('mongoose');
const { MONGODB_URI, PORT, HOST } = require("./utlis/config");

// connect to the mongodb database
mongoose    
    .connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB database...');

        // start the server to listen for requests
        app
            .listen(PORT, HOST, () => {
                console.log(`Server is running at http://${HOST}:${PORT}...`);
            });
    })
    .catch((error) => {
        console.log('Error in connecting to the database');
        console.log(`Error:`, error.message);
    })