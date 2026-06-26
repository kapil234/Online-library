import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/books/:category"
          element={<BrowseBooks />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
