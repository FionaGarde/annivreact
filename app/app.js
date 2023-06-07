const express = require('express');

const hostname = "0.0.0.0";
const port = 3003;

const server = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://mongo/apinode");

server.use(express.urlencoded());
server.use(express.json());

const birthdayRoute = require("./api/routes/birthdayRoute");
birthdayRoute(server); 

server.listen(port,hostname, () => {
    console.log(`Serveur qui tourne sur le port ${port}`)
});