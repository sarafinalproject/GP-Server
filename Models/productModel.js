const { json } = require("express");
const mongoose = require("mongoose");
let ProductSchema = new mongoose.Schema(
    {
        "name": String,
        "description": String,
        "phone": String,
        "city": String,
        // "category": String,
        // "street": String,

    }, { versionKey: false }
    //{ collection: "bbbs" }
)
let productModel = mongoose.model('products', ProductSchema);
module.exports = productModel;
