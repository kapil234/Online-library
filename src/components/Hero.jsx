import { Link } from "react-router-dom";
 function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-28">

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-6xl font-bold mb-6">
          Welcome to Online Library
        </h1>

        <p className="text-xl mb-8">
          Discover thousands of books across every category.
        </p>

        <Link
          to="/books/all"
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100"
        >
          Browse Books
        </Link>

      </div>
    </section>
  );
}

export default Hero