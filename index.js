const express = require("express");

const dataBaseConnection = require("./connection");

const trainModelRouter = require("./routes/trainRoutes");

const middleware = require("./middlewares/middlewares");

const app = express();

const port = 8080;


//dataBase connection 

const url = "mongodb://127.0.0.1:27017/train";

dataBaseConnection(url)
.then(()=>{
    
    console.log("dataBase connected successfully");
})
.catch((err)=>{

    console.log(err);
})



//middleware function

middleware(app);


//trainModel routes 

app.use("/",trainModelRouter);



//server connection 

app.listen(port,()=>{

    console.log(`server is listening at port ${port}`);
})