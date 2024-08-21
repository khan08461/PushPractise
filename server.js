const express = require("express");
const router = require("./Routes/userRoutes");
const dotenv = require('dotenv');
const { log } = require('console');
const { mongoose } = require("mongoose");
const connectDb = require("./config/db")
const app =express();


app.use(express.json())  //works as a middleware to parse json bodies


//connection of db mongo
// mongoose.connect("mongodb://127.0.0.1:27017/Diraction02")
dotenv.config();


app.use('/api/user', router)  //to use the routes that we just created


connectDb().then(
    app.listen(process.env.ports , () =>{
        console.log("server is working");
    })
);