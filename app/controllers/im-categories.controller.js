const categoriesModel = require('../models/categories.model');
const mongoose = require('mongoose');
const SubCategory = mongoose.model("SUB_CATEGORY_LIST", categoriesModel.subcategorySchema);
const Category = mongoose.model("CATEGORY_LIST", categoriesModel.categorySchema);
const user = require('./im-user.controller');
const {errorUnknown} = require("../utils/response.utils");
const {checkErrorDB} = require("../utils/response.utils");
const {errorValidate} = require("../utils/response.utils");
const {checkEmptyBody} = require("../utils/response.utils");
const {errorAuthorization} = require("../utils/response.utils");

exports.createCategory = (req, res) => {
    checkEmptyBody(req, res);
    user.checkToken(req.headers.authorization).then(checkResult => {
        if (checkResult) {
            Category.findOne({category: req.body.category}, 'category', function (err, category) {
                checkErrorDB(res, err);
                if (category) {
                    errorValidate(res, 'Такая категория уже существует. Измените имя.')
                } else {
                    const newCategory = new Category(req.body);
                    newCategory.save(function (err, result) {
                        checkErrorDB(res, err);
                        res.status(200).send(result._doc);
                    });
                }
            });
        } else {
            errorAuthorization(res)
        }
    }).catch(() => {
        errorAuthorization(res)
    });
};

exports.createSubcategory = (req, res) => {
    checkEmptyBody(req, res);
    user.checkToken(req.headers.authorization).then(checkResult => {
        if (checkResult) {
            SubCategory.findOne({subcategory: req.body.subcategory}, 'subcategory', function (err, subcategory) {
                checkErrorDB(res, err);
                if (subcategory) {
                    errorValidate(res, 'Такая подкатегория уже существует. Измените имя.');
                } else {
                    const newSubCategory = new SubCategory(req.body);
                    newSubCategory.save(function (err, result) {
                        checkErrorDB(res, err);
                        res.status(200).send(result._doc);
                    });
                }
            });
        } else {
            errorAuthorization(res)
        }
    }).catch(() => {
        errorAuthorization(res)
    });
};

exports.getCategories = (req, res) => {
    checkEmptyBody(req, res);
    let categoryList = null, subcategoryList = null;
    Category.find({}, function (err, category) {
        checkErrorDB(res, err);
        categoryList = category;
        SubCategory.find({}, function (err, subcategory) {
            checkErrorDB(res, err);
            subcategoryList = subcategory;
            if (categoryList && subcategoryList) {
                res.status(200).send({
                    categories: categoryList,
                    subcategories: subcategoryList
                });
            } else {
                errorUnknown(res)
            }
        });
    });
};

module.exports = require('./im-categories.controller');
