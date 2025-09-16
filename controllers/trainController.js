const trainModel = require("../models/trainModel");

async function handlerToGetAllTrains(req,res) {

    let allTrains = await trainModel.find({});

    if(allTrains.length==0){

        return res.send("not any trian yet");
    }

    res.render("home",{allTrains});
    
}


async function handlerToBookTicket(req,res) {

    let { id } = req.params;

    
    
}

module.exports = {handlerToGetAllTrains};