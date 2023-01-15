const { json } = require("express");
const mongoose = require("mongoose");
let ProductSchema = new mongoose.Schema(
    {
        "name": String,
        "category": String,
        "city": String

    }, { versionKey: false }
    //{ collection: "bbbs" }
)
let productModel = mongoose.model('products', ProductSchema);
module.exports = productModel;
