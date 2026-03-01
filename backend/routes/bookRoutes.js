const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

// Add Book
router.post("/", async (req, res) => {
  try {
    const { title, author, category, totalCopies } = req.body;

    const book = new Book({
      title,
      author,
      category,
      totalCopies,
      availableCopies: totalCopies
    });

    await book.save();
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get All Books
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Search Books
router.get("/search", async (req, res) => {
  const keyword = req.query.keyword;

  const books = await Book.find({
    title: { $regex: keyword, $options: "i" }
  });

  res.json(books);
});

module.exports = router;
