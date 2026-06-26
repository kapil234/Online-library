import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white shadow-xl rounded-xl p-10 text-center max-w-xl w-full">

        <h1 className="text-7xl font-bold text-red-600">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-4">
          The page you are looking for doesn't exist.
        </p>

        <div className="mt-6 bg-gray-100 p-4 rounded-lg">

          <p className="font-semibold">
            Invalid URL
          </p>

          <p className="text-red-500 break-all">
            {location.pathname}
          </p>

        </div>

        <Link
          to="/"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;