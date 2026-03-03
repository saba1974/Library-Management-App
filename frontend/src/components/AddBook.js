import { useState } from "react";
import { addBook } from "../api";

function AddBook({ refresh }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    totalCopies: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook(form);
    refresh();
    setForm({ title: "", author: "", category: "", totalCopies: 1 });
  };

  return (
    <div>
      <h3>Add Book</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />
        <input placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <input type="number"
          value={form.totalCopies}
          onChange={(e) => setForm({ ...form, totalCopies: e.target.value })}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddBook;
