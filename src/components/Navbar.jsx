import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <Link
          to="/"
          className="text-2xl font-bold tracking-wide"
        >
          📚 Online Library
        </Link>

        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>

          <Link to="/books/all" className="hover:text-yellow-300">
            Browse Books
          </Link>

          <Link to="/add-book" className="hover:text-yellow-300">
            Add Book
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;