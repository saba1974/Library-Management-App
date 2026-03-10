import React, { useState } from "react";
import API from "../api/api";

function TransactionAction() {

  const [bookId, setBookId] = useState("");
  const [userName, setUserName] = useState("");

  const handleBorrow = async () => {
    await API.post("/transactions/borrow", { bookId, userName });
    alert("Book Borrowed");
  };

  const handleReserve = async () => {
    await API.post("/transactions/reserve", { bookId, userName });
    alert("Book Reserved");
  };

  const handleReturn = async () => {
    await API.post("/transactions/return", { bookId, userName });
    alert("Book Returned");
  };

  return (
    <div>

      <h2>Book Transaction</h2>

      <input
        placeholder="Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />

      <input
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <button onClick={handleBorrow}>Borrow</button>
      <button onClick={handleReserve}>Reserve</button>
      <button onClick={handleReturn}>Return</button>

    </div>
  );
}

export default TransactionAction;