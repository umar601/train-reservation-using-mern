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

    let trainDetail = await trainModel.findById(id);

    // console.log(trainDetail);

    res.render("booking.ejs",{trainDetail});

    
    
}


async function handlerToPrintTicket(req,res) {

    let { persons } = req.body;

    let { id } = req.params;

    let trainDetail = await trainModel.findById(id);


    res.render("printTicket.ejs",{trainDetail,persons});

    
    
}



module.exports = {handlerToGetAllTrains,handlerToBookTicket,handlerToPrintTicket};