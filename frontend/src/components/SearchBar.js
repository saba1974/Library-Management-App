function SearchBar({ onSearch }) {
  return (
    <input
      placeholder="Search by title..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
