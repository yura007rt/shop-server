const mongoose = require('mongoose');

exports.profileSchema = new mongoose.Schema({
    nameStore: String,
    email: String,
    phone:String,
    address:String,
    deliveryArea:String,
    description:String,
    storeId:String
});