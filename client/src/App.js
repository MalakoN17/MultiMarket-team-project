import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Main from './pages/Main';
import StorePage from './pages/StorePage';
import Error from './pages/Error';
import ProductForm from './compontes/products/ProductForm';
import StoreProducts from './compontes/main/StoreProducts';

import Chat from './pages/Chat';
import Footer from './compontes/footer/Footer';
import OwnerStoreProduct from './compontes/ownerStore/OwnerStoreProduct';
import NavOwner from './compontes/ownerStore/NavOwner';
import OwnerStoreAccount from './compontes/ownerStore/OwnerStoreAccount';
import UpdateStore from './compontes/ownerStore/UpdateStore';
import AddStore from './compontes/addStore/AddStore';

function App() {
  return (
    <>
      {/* <Pr /> */}
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path="" element={<AddStore />} />
=======
          <Route path="" element={<Home />} /> 
          <Route path="chat" element={<Chat />} /> 
>>>>>>> dev
          <Route path="main" element={<Main />} />
          <Route path="storesroducts" element={<StoreProducts />} />
          <Route path="/store/:id" element={<StorePage />} />
          <Route path="addproduct" element={<ProductForm />} />
          <Route path="addproduct" element={<AddingProducts />}></Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
