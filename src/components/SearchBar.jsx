function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by title or author..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full md:w-96 border rounded-lg p-3 shadow"
    />
  );
}

export default SearchBar