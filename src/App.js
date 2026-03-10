import React from "react";

import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import SearchBook from "./components/SearchBook";
import Transactions from "./components/Transactions";
import TransactionAction from "./components/TransactionAction";

function App() {

  return (

    <div>

      <h1>Library Management System</h1>

      <hr/>

      <h2>Add Book</h2>
      <AddBook />

      <hr/>

      <h2>Search Book</h2>
      <SearchBook />

      <hr/>

      <h2>List of Books</h2>
      <BookList />

      <hr/>

      <h2>Transaction Action</h2>
      <TransactionAction />

      <hr/>

      <h2>Transactions</h2>
      <Transactions />

    </div>

  );

}

export default App;