import { useEffect, useState } from "react";
import { getTransactions } from "../api";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const data = await getTransactions();
    setTransactions(data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Transactions</h3>

      {transactions.length === 0 && <p>No transactions found.</p>}

      {transactions.map((t) => (
        <div
          key={t._id}
          style={{
            border: "1px solid #ccc",
            padding: "8px",
            marginBottom: "5px"
          }}
        >
          <p><strong>Book:</strong> {t.bookId?.title}</p>
          <p><strong>User:</strong> {t.userName}</p>
          <p><strong>Type:</strong> {t.type}</p>
          <p><strong>Date:</strong> {new Date(t.date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Transactions;
