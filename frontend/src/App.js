import { useEffect, useState } from "react";
import { getBooks, searchBooks } from "./api";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import Transactions from "./components/Transactions";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSearch = async (keyword) => {
    if (keyword === "") {
      fetchBooks();
    } else {
      const data = await searchBooks(keyword);
      setBooks(data);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Library Management System</h2>
      <AddBook refresh={fetchBooks} />
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} refresh={fetchBooks} />
      <Transactions />
    </div>
  );
}

export default App;
