import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages

import Home from './pages/Home';
import Main from './pages/Main';
import StorePage from './pages/StorePage';
import Error from './pages/Error';
import ProductForm from './compontes/products/ProductForm';
import StoreProducts from './compontes/main/StoreProducts';
import StoreList from "./compontes/main/StoreList";
import AddingProducts from './compontes/products/AddingProducts';
import FormProductOne from './compontes/products/FormProductOne';
import FormProductTwo from './compontes/products/FormProductTwo';
import FormProductThree from './compontes/products/FormProductThree';
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

          <Route path="store" element={<Store />} />

          <Route path="storesroducts" element={<StoreProducts />} />
          <Route path="addproduct" element={<ProductForm />} />
          <Route path="store" element={<StoreList />} />
          <Route path="addproduct" element={<AddingProducts />}>
            <Route path="formproductone" element={<FormProductOne />} />
            <Route path="formproducttwo" element={<FormProductTwo />} />
            <Route path="formproductthree" element={<FormProductThree />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
