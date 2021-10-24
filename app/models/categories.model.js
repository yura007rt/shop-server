const mongoose = require('mongoose');

exports.categorySchema = new mongoose.Schema({
    category: String,
});
exports.subcategorySchema = new mongoose.Schema({
    subcategory: String,
    idCategoryGroup: String,
});

module.exports = require('./categories.model');
