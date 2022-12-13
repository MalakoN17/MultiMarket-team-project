import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Main from "./pages/Main";
import Store from "./pages/Store";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="main" element={<Main />} />
          <Route path="store" element={<Store />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
