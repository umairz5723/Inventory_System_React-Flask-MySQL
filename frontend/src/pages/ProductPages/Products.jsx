import Header from '../../components/Header.jsx';
import SearchProduct from '../../components/SearchProduct.jsx';
import ProductsList from '../../components/ProductsListEditDelete.jsx';
import { Link } from 'react-router-dom';
import './Products.css';

function Products() {
    return (
    <div className = "home-container"> 
        <Header />
        <div className = "home-background">
        
            <SearchProduct/>
            <ProductsList />

            <div className = "add-missing-product-button-container">
            <Link to="/products/addproduct"> <button className="header-button">Add A Product To System</button> </Link>
            <Link to="/products/missing-return-product">  <button className="header-button">Missing/Return Product</button> </Link> 
            </div>
       
        </div>
    </div>
   
    );
}

export default Products;