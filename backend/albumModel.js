const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    imgUrl: { type: String, require: true },
    artist: { type: String, require: true },
    category: { type: Array, require: true },
    releaseYear: { type: String, require: true },
    price: { type: Number, require: true },
  },
  { versionKey: false }
);

const Album = mongoose.model("album", albumSchema);

module.exports = Album;