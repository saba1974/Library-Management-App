const express = require("express");
const Book = require("../models/Book");
const Transaction = require("../models/Transaction");

const router = express.Router();

// Reserve Book
router.post("/reserve", async (req, res) => {
  const { bookId, userName } = req.body;

  const book = await Book.findById(bookId);

  if (!book || book.availableCopies <= 0) {
    return res.status(400).json({ message: "Book not available" });
  }

  book.availableCopies -= 1;
  await book.save();

  const transaction = new Transaction({
    bookId,
    userName,
    type: "reserve"
  });

  await transaction.save();

  res.json({ message: "Book reserved successfully" });
});

// Borrow Book
router.post("/borrow", async (req, res) => {
  const { bookId, userName } = req.body;

  const book = await Book.findById(bookId);

  if (!book || book.availableCopies <= 0) {
    return res.status(400).json({ message: "Book not available" });
  }

  book.availableCopies -= 1;
  await book.save();

  const transaction = new Transaction({
    bookId,
    userName,
    type: "borrow"
  });

  await transaction.save();

  res.json({ message: "Book borrowed successfully" });
});

// Return Book
router.post("/return", async (req, res) => {
  const { bookId, userName } = req.body;

  const book = await Book.findById(bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  book.availableCopies += 1;
  await book.save();

  const transaction = new Transaction({
    bookId,
    userName,
    type: "return"
  });

  await transaction.save();

  res.json({ message: "Book returned successfully" });
});

// Get All Transactions
router.get("/", async (req, res) => {
  const transactions = await Transaction.find().populate("bookId");
  res.json(transactions);
});

module.exports = router;
