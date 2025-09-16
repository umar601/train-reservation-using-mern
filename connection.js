const mongoose = require("mongoose");


async function dataBaseConnection(url) {

    await mongoose.connect(url);
    
}

module.exports = dataBaseConnection;