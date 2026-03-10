import React, { useState } from "react";
import API from "../api/api";

function SearchBook() {

  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {

    const res = await API.get(`/books/search?keyword=${keyword}`);

    setResults(res.data);
  };

  return (

    <div>

      <input
        type="text"
        placeholder="Enter title or author"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <table border="1">

        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>

          {results.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>

  );
}

export default SearchBook;