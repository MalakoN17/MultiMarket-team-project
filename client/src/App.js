import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Main from './pages/Main';
import StorePage from './pages/StorePage';
import Error from './pages/Error';
import ProductForm from './compontes/products/ProductForm';
import AddingProducts from './compontes/products/AddingProducts';
import StoreProducts from './compontes/main/StoreProducts';
import CheckOut from './pages/checkOut/CheckOut';
import Store from './compontes/stores/store';
import AddStore from './compontes/addStore/AddStore';

import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterStoreOwner from './pages/RegisterStoreOwner';
import LoginStoreOwner from './pages/LoginStoreOwner';
import Footer from './compontes/footer/Footer';
import OwnerStoreProduct from './compontes/ownerStore/OwnerStoreProduct';
import NavOwner from './compontes/ownerStore/NavOwner';
import OwnerStoreAccount from './compontes/ownerStore/OwnerStoreAccount';
import UpdateStore from './compontes/ownerStore/UpdateStore';
import NeedLogin from './chatComponents/NeedLogin';

import OwnerStore from './pages/OwnerStore';


function App() {
  return (
    <>
      {/* </> */}
      <Router>
        <Routes>
          <Route path="chat" element={<Chat />} />
          <Route path="" element={<Main />} />
          <Route path="storesroducts" element={<StoreProducts />} />
          <Route path="/store/:id" element={<StorePage />} />
          {/* <Route path="/store" element={<Store />} /> */}
          <Route path="addproduct" element={<ProductForm />} />
          <Route path="checkout" element={<CheckOut/>}></Route>
          <Route path="NeedLogin" element={<NeedLogin/>}></Route>
          
        

      
          <Route path='/ownerstore' element={<OwnerStore />}>
            <Route path='addproduct' element={<AddingProducts/>}/>
            <Route path='accountstore' element={<OwnerStoreAccount/>}/>
          </Route>

          <Route path="addstore" element={<AddStore />} />
          <Route path="login" element={<Login />} />
          <Route path="ownerlogin" element={<LoginStoreOwner />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
