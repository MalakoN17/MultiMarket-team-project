import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages

import Home from './pages/Home';
import Main from './pages/Main';
import Store from './pages/Store';
import Error from './pages/Error';
import AddingProducts from './compontes/products/AddingProducts';
import FormProductOne from './compontes/products/FormProductOne';
import FormProductTwo from './compontes/products/FormProductTwo';
import FormProductThree from './compontes/products/FormProductThree';
import StoreList from "./compontes/main/StoreList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="main" element={<Main />} />
          <Route path="store" element={<Store />} />
          <Route path="StoreList" element={<StoreList />} />
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
