import { Link } from "react-router-dom";
const categories = [
  "Fiction",
  "Non Fiction",
  "Sci-Fi",
  "Programming",
  "Fantasy",
  "Biography",
  "History",
  "Self Help",
];

 function Categories() {
  return (
    <section className="max-w-7xl mx-auto py-14 px-5">

      <h2 className="text-4xl font-bold text-center mb-10">
        Book Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

       {categories.map((cat) => (
          <Link
            key={cat}
            to={`/books/${cat}`}
            className="bg-white shadow-lg rounded-xl p-8 text-center hover:bg-blue-600 hover:text-white duration-300 cursor-pointer block"
          >
            <h3 className="text-xl font-semibold">
              {cat}
            </h3>
          </Link>
        ))}

      </div>

    </section>
  );
}

export default Categories