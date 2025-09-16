const mongoose = require("mongoose");

const dataBaseConnection = require("../connection");

const url = "mongodb://127.0.0.1:27017/train";

dataBaseConnection(url)
.then(()=>{
    
    console.log("dataBase connected successfully");
})
.catch((err)=>{

    console.log(err);
})


const trainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    trainNumber: {
        type: String,
        required: true,
        unique: true 
    },
    departureTime: {
        type: String,
        required: true
    },
    arrivalTime: {   
        type: String,
        required: true
    },
    departureStation: {
        type: String,
        required: true
    },
    arrivalStation: {
        type: String,
        required: true
    },
    fare: {
        type: Number,
        required: true
    },
    capacity: {      
        type: Number,
        required: true
    },
    status: { 
        type: String,
        enum: ["On Time", "Delayed", "Cancelled", "Completed"],
        default: "On Time"
    },
    duration: { 
        type: String
    },
    bookedSeats: { 
        type: Number,
        default: 0
    },
    day:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});



const trainModel = mongoose.model("trainModel",trainSchema);


module.exports = trainModel;