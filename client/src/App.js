import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages

import Home from './pages/Home';
import Main from './pages/Main';
import Store from './pages/Store';
import Error from './pages/Error';
import ProductForm from './compontes/products/ProductForm';
import StoreProducts from './compontes/main/StoreProducts';
import StoreList from "./compontes/main/StoreList";
import Chat from './pages/Chat';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="main" element={<Main />} />

          <Route path="store" element={<Store />} />

          <Route path="storesroducts" element={<StoreProducts />} />
          <Route path="addproduct" element={<ProductForm />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
