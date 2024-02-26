import Header from '../../components/Header.jsx';
import SearchProduct from '../../components/SearchProduct.jsx';
import ProductsList from '../../components/ProductsList.jsx';
import MissingReturn from '../../components/MissingReturn.jsx';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <div className = "home-container"> 
        <Header />
        <div className = "home-background">
        
            <SearchProduct/>
            <ProductsList />

            <div className = "add-product-container">
            <Link to="/"> <button className="header-button">Add A Product To System</button> </Link>
            </div>

            <MissingReturn />
        </div>
    </div>
   
    );
}

export default Products;