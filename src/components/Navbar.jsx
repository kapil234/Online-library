import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-3xl font-bold flex items-center gap-2 justify-center md:justify-start"
          >
            📚 <span>Online Library</span>
          </NavLink>

          {/* Navigation */}
          <div className="mt-4 md:mt-0 flex justify-center md:justify-end gap-8 text-lg font-semibold">

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 border-b-2 border-yellow-300"
                  : "hover:text-yellow-300"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/books/all"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 border-b-2 border-yellow-300"
                  : "hover:text-yellow-300"
              }
            >
              Browse Books
            </NavLink>

            <NavLink
              to="/add-book"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 border-b-2 border-yellow-300"
                  : "hover:text-yellow-300"
              }
            >
              Add Book
            </NavLink>

          </div>

        </div>

      </div>
    </nav>
  );
}


export default Navbar;