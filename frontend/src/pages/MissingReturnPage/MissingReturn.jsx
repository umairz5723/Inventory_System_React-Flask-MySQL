import Header from "../../components/Header";
import SearchProduct from "../../components/SearchProduct";
import ProductsListMissingDamaged from "../../components/ProductsListMissingDamaged";
import MissingReturnForm from "../../components/MissingReturnForm";
import './MissingReturn.css'

function MissingReturn() {
    return (
        <div className = "home-container"> 
            <Header />
        <div className = "missing-info">
            <h3> • Search for the product to to report missing/damaged</h3>
            <h3> • Mark the checkbox of that product </h3>
            <h3> • Fill out the Removal Form </h3>
        </div>
        <div className = "home-background">
            <SearchProduct/>
            <ProductsListMissingDamaged/>
            <MissingReturnForm />
        </div>
        
        </div>
    )
}

export default MissingReturn;