import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Main from './pages/Main';
import StorePage from './pages/StorePage';
import Error from './pages/Error';
import ProductForm from './compontes/products/ProductForm';
import AddingProducts from './compontes/products/AddingProducts';
import StoreProducts from './compontes/main/StoreProducts';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './compontes/footer/Footer';
import OwnerStoreProduct from './compontes/ownerStore/OwnerStoreProduct';
import NavOwner from './compontes/ownerStore/NavOwner';
import OwnerStoreAccount from './compontes/ownerStore/OwnerStoreAccount';
import UpdateStore from './compontes/ownerStore/UpdateStore';
import AddStore from './compontes/addStore/AddStore';
import CheckoutSuccess from './pages/CheckoutSuccess';
import Store from './compontes/stores/Store';

function App() {
  return (
    <>
    {/* </> */}
      <Router>
        <Routes>

          <Route path="" element={<AddStore />} /> 

          <Route path="chat" element={<Chat />} /> 
          <Route path="main" element={<Main />} />
          <Route path="storesroducts" element={<StoreProducts />} />
          <Route path="/store/:id" element={<StorePage />} />
          <Route path="/store" element={<Store />} />
          <Route path="addproduct" element={<ProductForm />} />
          <Route path="addproduct" element={<AddingProducts />}></Route>
          <Route path="CheckoutSuccess" element={<CheckoutSuccess />}/>

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
