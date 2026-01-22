function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search dinosaur..."
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchBar;
