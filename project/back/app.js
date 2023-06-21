const express = require('express');

const hostname = "0.0.0.0";
const port = 3000;

const server = express();
 
const mongoose = require("mongoose");
mongoose.connect("mongodb://mongo/apinode");

server.use(express.urlencoded({extended: true}));
server.use(express.json());

const birthdayRoute = require("./api/routes/birthdayRoute");
birthdayRoute.routes(server);



server.listen(port,hostname, () => {
    console.log(`Serveur qui tourne sur le port ${port}`)
});