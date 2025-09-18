const express = require("express");

const trainModelRouter = express.Router();

const { handlerToGetAllTrains,handlerToBookTicket,handlerToPrintTicket } = require("../controllers/trainController");


trainModelRouter
.get("/home",handlerToGetAllTrains);

trainModelRouter
.get("/home/booking/:id",handlerToBookTicket)

trainModelRouter
.post("/home/booking/ticket/:id",handlerToPrintTicket)


module.exports = trainModelRouter;