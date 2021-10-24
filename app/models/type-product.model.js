const mongoose = require('mongoose');

exports.productSchema = new mongoose.Schema({
    name: String,
    size: String,
    category: String,
    subcategory: String
});
