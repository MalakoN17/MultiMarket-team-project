import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Main from './pages/Main';
import StorePage from './pages/StorePage';
import Error from './pages/Error';
import ProductForm from './compontes/products/ProductForm';
import StoreProducts from './compontes/main/StoreProducts';
import StoreList from './compontes/stores/stores';
import Chat from './pages/Chat';
import OwnerStoreProduct from './compontes/ownerStore/OwnerStoreProduct';
import NavOwner from './compontes/ownerStore/NavOwner';
import OwnerStoreAccount from './compontes/ownerStore/OwnerStoreAccount';

function App() {
  return (
    <>
      <OwnerStoreAccount />
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="main" element={<Main />} />
          <Route path="store" element={<StorePage />} />
          <Route path="storesroducts" element={<StoreProducts />} />
          <Route path="addproduct" element={<ProductForm />} />
          <Route path="store" element={<StoreList />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
