const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBooksSchema = new Schema({
  title: { type: String },
  authors: { type: Array },
  description: { type: String },
  image: { type: String },
  link: { type: String }
});

const GoogleBooks = mongoose.model("GoogleBooks", googleBooksSchema);

module.exports = GoogleBooks;