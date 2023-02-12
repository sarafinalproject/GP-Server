
const productModel = require("./productModel");

exports.getallProducts = function () {

    return new Promise((resolve, reject) => {
        productModel.find({}, function (err, data) {
            if (err) { reject(err) }
            else {
                // console.log(data);
                resolve(data);
            }
        })
    }

    )

}
exports.getProductsByID = function (id) {
    return new Promise((resolve, reject) => {
        productModel.findById(id, function (err, data) {
            if (err) {
                reject(err);
            }
            else {

                resolve(data);
            }
        }

        )
    })
}
exports.createProduct = function (obj) {
    return new Promise((resolve, reject) => {
        let product = new productModel(
            {
                name: obj.name
            }
        );
        product.save(function (err) {
            if (err) { reject(err) }
            else {

                resolve("created",err);
            }
        })
    }

    )
}
exports.updateProduct = function (id, obj) {
    return new Promise((resolve, reject) => {
        productModel.findByIdAndUpdate(id,
            {
                name: obj.name
            }, function (err) {
            if (err) {
                reject(err)
            }
            else {

                resolve("update");

            }
        }

        )
    }

    )
}
exports.deleteProducts = function (id) {
    return new Promise((resolve, reject) => {
        productModel.findByIdAndDelete(id, function (err, data) {
            if (err) {
                reject(err)
            }
            else {

                resolve("delete");

            }
        })
    }

    )
}


