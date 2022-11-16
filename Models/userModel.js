const { json } = require("express");
const mongoose=require("mongoose");
let UserSchema=new mongoose.Schema({
    "First_name":String,
    "Last_name":String,
    "Adress":{"city":String,"street":String,"number":String},
    "Password":Number,
    "Phone":String,
    "Status_user":String
    
},{versionKey:false}
//{ collection: "bbbs" }
)
let userModel=mongoose.model('users',UserSchema);
module.exports=userModel;
