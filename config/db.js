const mongoose = require("mongoose");
//const URI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.15"
// const URI = process.env.database_uri;
const connectDb =async ()=> {

    try {
        await mongoose.connect(process.env.database_uri);         //mongoose connection
        console.log ("Connection established successfully");
    } catch (error) {
        console.log( "database connection failed", error );
    }
};
module.exports = connectDb;