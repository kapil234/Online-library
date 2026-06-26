import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";


function BrowseBooks() {
  const { category } = useParams();

  // Get books from Redux store
  const books = useSelector((state) => state.books.books);

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => {
    // Filter by category
    const matchCategory =
      category === "all" || book.category === category;

    // Filter by search
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <>
      

      <div className="max-w-7xl mx-auto py-10 px-5">

        <h1 className="text-4xl font-bold mb-6">
          {category === "all" ? "All Books" : category}
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
            <div className="col-span-full text-center">
              <h2 className="text-2xl font-semibold text-gray-600">
                No Books Found 📚
              </h2>
            </div>
          )}
        </div>

      </div>
    </>
  );
}



export default BrowseBooks