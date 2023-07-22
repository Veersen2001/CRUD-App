const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'Name is required'],
        trim:true,//remove extra spaces
        maxLength:[20,'Name Must be less than 20 char']
    },
    email:{
        type:String,
        required:[true,"email is Required"],
        unique:true
    }
})
module.exports = mongoose.model("User",userSchema);