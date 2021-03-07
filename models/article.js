const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  articleText: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Article", articleSchema);
