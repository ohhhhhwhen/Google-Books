var mongoose = require("mongoose");
var schema = new mongoose.Schema({
    title: String,
    authors: [String],
    bookImg: String,
    description: String,
    link: String
})

var Link = mongoose.model('Link', schema);

module.exports = Link;