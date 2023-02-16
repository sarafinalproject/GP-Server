const { json } = require("express");
const mongoose=require("mongoose");
let UserSchema=new mongoose.Schema({
    "full_name" : String,
    "email" : String,
    "password": String

    
},{versionKey:false}
//{ collection: "bbbs" }
)
let userModel=mongoose.model('users',UserSchema);
module.exports=userModel;
