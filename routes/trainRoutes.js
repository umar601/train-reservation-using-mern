const express = require("express");

const trainModelRouter = express.Router();

const { handlerToGetAllTrains } = require("../controllers/trainController");


trainModelRouter
.get("/home",handlerToGetAllTrains);


module.exports = trainModelRouter;