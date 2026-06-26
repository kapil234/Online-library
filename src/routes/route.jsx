import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import BrowseBooks from "../pages/BrowseBooks";
import BookDetails from "../pages/BookDetails";
import AddBook from "../pages/AddBook";
import NotFound from "../pages/NotFound";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "books/:category",
        element: <BrowseBooks />,
      },
      {
        path: "book/:id",
        element: <BookDetails/>,
      },
      {
        path: "add-book",
        element: <AddBook/>,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound/>,
  },
]);

export default router;