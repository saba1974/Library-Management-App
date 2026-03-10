import React, { useState } from "react";
import API from "../api/api";

function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    totalCopies: ""
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/books", book);
    alert("Book Added Successfully");
    setBook({ title: "", author: "", category: "", totalCopies: "" });
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={book.title} onChange={handleChange} required />
        <input name="author" placeholder="Author" value={book.author} onChange={handleChange} required />
        <input name="category" placeholder="Category" value={book.category} onChange={handleChange} required />
        <input name="totalCopies" type="number" placeholder="Total Copies" value={book.totalCopies} onChange={handleChange} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;