import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

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
      <Navbar />

      <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">

        <h1 className="text-3xl font-bold mb-8 text-center">
          Add New Book
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={book.title}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
          <p className="text-red-500">{errors.title}</p>

          <input
            type="text"
            name="author"
            placeholder="Author"
            value={book.author}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
          <p className="text-red-500">{errors.author}</p>

          <select
            name="category"
            value={book.category}
            onChange={handleChange}
            className="w-full border p-3 rounded"
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
          <p className="text-red-500">{errors.category}</p>

          <input
            type="number"
            step="0.1"
            min="1"
            max="5"
            name="rating"
            placeholder="Rating"
            value={book.rating}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
          <p className="text-red-500">{errors.rating}</p>

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={book.image}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
          <p className="text-red-500">{errors.image}</p>

          <textarea
            rows="5"
            name="description"
            placeholder="Description"
            value={book.description}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
          <p className="text-red-500">{errors.description}</p>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Add Book
          </button>

        </form>
      </div>
    </>
  );
}

export default AddBook