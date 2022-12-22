import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Main from './pages/Main';
import StorePage from './pages/StorePage';
import Error from './pages/Error';
import ProductForm from './compontes/products/ProductForm';
import AddingProducts from './compontes/products/AddingProducts';
import StoreProducts from './compontes/main/StoreProducts';
// import Store from './compontes/stores/Store';
import AddStore from './compontes/addStore/AddStore';

import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './compontes/footer/Footer';
import OwnerStoreProduct from './compontes/ownerStore/OwnerStoreProduct';
import NavOwner from './compontes/ownerStore/NavOwner';
import OwnerStoreAccount from './compontes/ownerStore/OwnerStoreAccount';
import UpdateStore from './compontes/ownerStore/UpdateStore';
import FQ from './pages/FQ';
import ContactUS from './pages/ContactUS';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
    {/* </> */}
      <Router>
        <Routes>
          <Route path="chat" element={<Chat />} /> 
          <Route path="main" element={<Main />} />
          <Route path="storesroducts" element={<StoreProducts />} />
          <Route path="/store/:id" element={<StorePage />} />
          {/* <Route path="/store" element={<Store />} /> */}
          <Route path="addproduct" element={<ProductForm />} />
          <Route path="addstore" element={<AddStore />} />
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="question" element={<FQ/>} />
          <Route path="contactUS" element={<ContactUS />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
