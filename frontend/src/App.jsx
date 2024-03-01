import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home.jsx';
import Products from './pages/ProductPages/Products.jsx';
import Orders from './pages/OrderPage/Order.jsx';
import Vendors from './pages/VendorsPage/Vendors.jsx';
import AddProduct from './pages/ProductPages/AddProduct.jsx';
import MissingReturn from './pages/MissingReturnPage/MissingReturn.jsx';
import './App.css';




function App() {
  return (
    <Router>
      <Routes>
      
        <Route path = '/' element={<Home />}/>
        <Route path = '/products' element={<Products />}/>
        <Route path = '/products/addproduct' element = {<AddProduct />} />  
        <Route path = '/products/missing-return-product' element = {<MissingReturn/>} />
        <Route path = '/orders' element={<Orders />}/>
        <Route path = '/vendors' element={<Vendors />}/>

      </Routes>

    </Router>

  )
}

export default App;
