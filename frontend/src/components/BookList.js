import { reserveBook, borrowBook, returnBook } from "../api";

function BookList({ books, refresh }) {

  const handleAction = async (type, bookId) => {
    const userName = prompt("Enter your name:");
    if (!userName) return;

    if (type === "reserve")
      await reserveBook({ bookId, userName });

    if (type === "borrow")
      await borrowBook({ bookId, userName });

    if (type === "return")
      await returnBook({ bookId, userName });

    refresh();
  };

  return (
    <div>
      <h3>Book List</h3>
      {books.map((book) => (
        <div key={book._id} style={{ border: "1px solid gray", margin: "5px", padding: "5px" }}>
          <h4>{book.title}</h4>
          <p>Author: {book.author}</p>
          <p>Available: {book.availableCopies}</p>

          <button onClick={() => handleAction("reserve", book._id)}>Reserve</button>
          <button onClick={() => handleAction("borrow", book._id)}>Borrow</button>
          <button onClick={() => handleAction("return", book._id)}>Return</button>
        </div>
      ))}
    </div>
  );
}

export default BookList;
