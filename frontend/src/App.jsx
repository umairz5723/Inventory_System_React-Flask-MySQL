import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home.jsx';
import Products from './pages/Product_pages/Products.jsx';
import Orders from './pages/OrderPage/Order.jsx';
import Vendors from './pages/VendorsPage/Vendors.jsx';
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
      
        <Route path = "/" element={<Home />}/>
        <Route path = "/products" element={<Products />}/>
        <Route path = "/orders" element={<Orders />}/>
        <Route path = "/vendors" element={<Vendors />}/>

      </Routes>

    </Router>

  )
}

export default App;
