import { useState } from "react";
import { useParams } from "react-router-dom";
import books from "../data/books";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import Navbar from "../components/Navbar";
function BrowseBooks() {
  const { category } = useParams();

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchCategory =
      category === "all" || book.category === category;

    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto py-10 px-5">

        <h1 className="text-4xl font-bold mb-6">

          {category === "all"
            ? "All Books"
            : category.toUpperCase()}

        </h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">

          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            ))
          ) : (
            <h2>No Books Found</h2>
          )}

        </div>

      </div>
    </>
  );
}

export default BrowseBooks