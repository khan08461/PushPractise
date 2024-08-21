const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
    },

});
module.exports = mongoose.model ("Users", DataSchema);