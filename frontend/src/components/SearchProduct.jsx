import './components.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchProduct() {
    return (

        <div className = "search-product-container">
            <div className="input-group mb-3">
                <div className = "search-label">
                    <h5>Search Product by name: </h5>
                </div>
            
                <input type="text" className="form-control" placeholder="Search..." />
                <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div>
        </div>
   
    )
}

export default SearchProduct;