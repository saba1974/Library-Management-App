const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  totalCopies: Number,
  availableCopies: Number
});

module.exports = mongoose.model("Book", bookSchema);
