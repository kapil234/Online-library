import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";


function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    rating: "",
    image: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!book.title.trim()) newErrors.title = "Title is required";
    if (!book.author.trim()) newErrors.author = "Author is required";
    if (!book.category) newErrors.category = "Category is required";
    if (!book.rating) newErrors.rating = "Rating is required";
    if (!book.image.trim()) newErrors.image = "Image URL is required";
    if (!book.description.trim())
      newErrors.description = "Description is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    dispatch(
      addBook({
        id: Date.now(),
        ...book,
      })
    );

    navigate("/books/all");
  };

  return (

  <>
   

    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center py-12 px-4">

      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2">

       {/* left side  */}
        <div className="hidden md:flex flex-col justify-center items-center bg-indigo-700 text-white p-10">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3145/3145765.png"
            alt="Books"
            className="w-72 mb-8"
          />

          <h1 className="text-4xl font-bold mb-4">
            Add Your Favorite Book
          </h1>

          <p className="text-lg text-center text-indigo-100">
            Expand your online library by adding books with complete details.
            Fill out the form and they'll instantly appear in the library.
          </p>

        </div>

        {/* Right Side */}
        <div className="p-10">

          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">
            📚 Add New Book
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <input
                type="text"
                name="title"
                placeholder="Book Title"
                value={book.title}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            </div>

            <div>
              <input
                type="text"
                name="author"
                placeholder="Author Name"
                value={book.author}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <p className="text-red-500 text-sm mt-1">{errors.author}</p>
            </div>

            <div>
              <select
                name="category"
                value={book.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option value="">Select Category</option>
                <option>Fiction</option>
                <option>Non Fiction</option>
                <option>Sci-Fi</option>
                <option>Programming</option>
                <option>Fantasy</option>
                <option>Biography</option>
                <option>History</option>
                <option>Self Help</option>
              </select>
              <p className="text-red-500 text-sm mt-1">{errors.category}</p>
            </div>

            <div>
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                step="0.1"
                placeholder="Rating (1-5)"
                value={book.rating}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
            </div>

            <div>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={book.image}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <p className="text-red-500 text-sm mt-1">{errors.image}</p>
            </div>

            <div>
              <textarea
                rows="4"
                name="description"
                placeholder="Book Description"
                value={book.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
            >
              📖 Add Book
            </button>

          </form>

        </div>

      </div>

    </div>
  </>
);
}

export default AddBook