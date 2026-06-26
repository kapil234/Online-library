import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Welcome to
          <br />
          Online Library
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Discover thousands of books across every category.
        </p>

        <Link
          to="/books/all"
          className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Browse Books
        </Link>

      </div>
    </section>
  );
}


export default Hero