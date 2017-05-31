let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let albumSchema = new Schema ({
  artistName: String,
  genre: Array,
  name: String,
  releaseDate: String
})

let Album = mongoose.model("Album", albumSchema);
module.exports = Album;
