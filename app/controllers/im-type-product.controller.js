const typeProductModel = require('../models/type-product.model');
const mongoose = require('mongoose');
const {checkEmptyBody} = require("../utils/response.utils");
const Product = mongoose.model("PRODUCT_TYPE_LIST", typeProductModel.productSchema);
const user = require('./im-user.controller');
const {checkErrorDB} = require("../utils/response.utils");
const {errorAuthorization} = require("../utils/response.utils");


exports.getTypeProduct = (req, res) => {
    checkEmptyBody(req, res);
    Product.find({}, function (err, product) {
        checkErrorDB(res, err);
        res.status(200).send(product);
    })
};

exports.createTypeProduct = (req, res) => {
    checkEmptyBody(req, res);
    user.checkToken(req.headers.authorization).then(checkResult => {
        if (checkResult) {
            const newProduct = new Product(req.body);
            newProduct.save(function (err, result) {
                if (err) res.status(403).send({detail: err}); else res.status(200).send(result._doc);
            });
        } else {
            errorAuthorization(res)
        }
    }).catch(() => {
        errorAuthorization(res)
    })

};

module.exports = require('./im-type-product.controller');
