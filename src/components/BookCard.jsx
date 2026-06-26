import { Link } from "react-router-dom";

 function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 duration-300">

      <img
        src={book.image}
        alt={book.title}
        className="h-72 w-full object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {book.title}
        </h2>

        <p className="text-gray-600">
          {book.author}
        </p>

        <p className="mt-2">
          ⭐ {book.rating}
        </p>

        <Link
          to={`/book/${book.id}`}
          className="mt-5 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default BookCard