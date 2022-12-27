import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages ---
import Main from './pages/Main';
import StorePage from './pages/StorePage';
import Error from './pages/Error';
import CheckOut from './pages/checkOut/CheckOut';
import Store from './pages/Store';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterStoreOwner from './pages/RegisterStoreOwner';
import LoginStoreOwner from './pages/LoginStoreOwner';
import FQ from './pages/FQ';
import ContactUS from './pages/ContactUS';
import AboutUs from './pages/AboutUs';
import OwnerStore from './pages/OwnerStore';
import PersonalArea from './pages/PersonalArea';
import CheckoutSuccess from './pages/CheckoutSuccess';
// components ---
import AddStore from './compontes/addStore/AddStore';
import ProductForm from './compontes/products/ProductForm';
import AddingProducts from './compontes/products/AddingProducts';
import StoreProducts from './compontes/main/StoreProducts';
import UpdateOwnerDet from './compontes/ownerStore/UpdateOwnerDet';
import Footer from './compontes/footer/Footer';
import NavOwner from './compontes/ownerStore/NavOwner';
import OwnerStoreAccount from './compontes/ownerStore/OwnerStoreAccount';
import UpdateStore from './compontes/ownerStore/UpdateStore';
import NeedLogin from './chatComponents/NeedLogin';
import ReceiptsOwnerStore from './compontes/ownerStore/ReceiptsOwnerStore';
import StoreDetails from './compontes/ownerStore/StoreDetails';
import HomeOwner from './compontes/ownerStore/HomeOwner';
import ProductStoreOwner from './compontes/ownerStore/ProductStoreOwner';
import UpdateProduct from './compontes/ownerStore/UpdateProduct';
import OwnerDet from './compontes/ownerStore/OwnerDet';

function App() {
  const dispatch = useDispatch();
  // const user = useSelector(state=> state.user);

  const someFunction = async ()=>{
      const res = await axios.get('http://localhost:8000/auth/login/success', {
          withCredentials:true,
      })
      if(res.status === 200) dispatch(getUser(res.data))
    }

  useEffect(()=>{
    // console.log(user);
    someFunction()
  },[])

  return (
    <>
      <Router>
        <Routes>
          <Route path="chat" element={<Chat />} />
          <Route path="" element={<Main />} />
          <Route path="storesroducts" element={<StoreProducts />} />
          <Route path="/store/:id" element={<StorePage />} />
          <Route path="/store" element={<Store />} />
          <Route path="addproduct" element={<ProductForm />} />
          <Route path="checkout" element={<CheckOut />}></Route>
          <Route path="NeedLogin" element={<NeedLogin />}></Route>

          <Route path='/ownerstore' element={<OwnerStore />}>
            <Route path='' element={<HomeOwner />} />
            <Route path='addproduct' element={<AddingProducts />} />
            <Route path='updateproduct/:id' element={<UpdateProduct />} />
            <Route path='allproduct' element={<ProductStoreOwner />} />

            <Route path='accountstore' element={<OwnerStoreAccount />}>
              <Route path='ownerdet' element={<OwnerDet />} />
              <Route path='updateownerdet' element={<UpdateOwnerDet />} />
            </Route>
            <Route path='receipts' element={<ReceiptsOwnerStore />} />
            <Route path='storedetails' element={<StoreDetails />} />
            <Route path='updatestoredetails' element={<UpdateStore />} />
          </Route>

          <Route path="addstore" element={<AddStore />} />
          <Route path="login" element={<Login />} />
          <Route path="ownerlogin" element={<LoginStoreOwner />} />
          <Route path="register" element={<Register />} />
          <Route path="question" element={<FQ />} />
          <Route path="contactUS" element={<ContactUS />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="personalArea" element={<PersonalArea />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
