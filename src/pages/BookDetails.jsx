import { useParams, Link } from "react-router-dom";
import books from "../data/books";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);

  const book = books.find((item) => item.id === Number(id));

  if (!book) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold text-red-600">
          Book Not Found
        </h1>

        <Link
          to="/books/all"
          className="mt-5 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-10">

        <div className="bg-white shadow-xl rounded-xl overflow-hidden md:flex">

          <img
            src={book.image}
            alt={book.title}
            className="md:w-1/3 w-full h-[500px] object-cover"
          />

          <div className="p-8 flex-1">

            <h1 className="text-4xl font-bold mb-4">
              {book.title}
            </h1>

            <p className="text-xl text-gray-700 mb-2">
              <span className="font-semibold">Author:</span> {book.author}
            </p>

            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Category:</span> {book.category}
            </p>

            <p className="text-lg mb-2">
              ⭐ {book.rating}/5
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Description
            </h2>

            <p className="text-gray-700 leading-8">
              {book.description}
            </p>

            <Link
              to="/books/all"
              className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              ← Back to Browse
            </Link>

          </div>

        </div>

      </div>
    </>
  );
}

export default BookDetails