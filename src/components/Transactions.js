import React, { useEffect, useState } from "react";
import API from "../api/api";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await API.get("/transactions");
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transaction History</h2>

      {transactions.map((t) => (
        <div key={t._id}>
          <p>
            {t.userName} - {t.type} - {t.bookId?.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Transactions;