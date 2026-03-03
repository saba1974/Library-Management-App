const BASE_URL = "http://localhost:5000/api";

export const getBooks = async () => {
  const res = await fetch(`${BASE_URL}/books`);
  return res.json();
};

export const addBook = async (book) => {
  const res = await fetch(`${BASE_URL}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  return res.json();
};

export const searchBooks = async (keyword) => {
  const res = await fetch(`${BASE_URL}/books/search?keyword=${keyword}`);
  return res.json();
};

export const reserveBook = async (data) => {
  return fetch(`${BASE_URL}/transactions/reserve`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const borrowBook = async (data) => {
  return fetch(`${BASE_URL}/transactions/borrow`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const returnBook = async (data) => {
  return fetch(`${BASE_URL}/transactions/return`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const getTransactions = async () => {
  const res = await fetch(`${BASE_URL}/transactions`);
  return res.json();
};
