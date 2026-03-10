import React, { useState, useEffect } from "react";
import API from "../api/api";

function BookList() {

  const [books, setBooks] = useState([]);

  // Fetch data when component loads
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await API.get("/books");
    setBooks(res.data);
  };

  return (
    <div>
      <h2>Book List</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Total Copies</th>
          </tr>
        </thead>

        <tbody>
          {books.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.category}</td>
              <td>{item.totalCopies}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default BookList;