let mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tunely");

module.exports.Album = require("./album.js");
