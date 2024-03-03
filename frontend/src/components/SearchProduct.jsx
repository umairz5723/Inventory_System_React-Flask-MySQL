import './components.css'; 


function SearchProduct() {


    return (

        <div className="search-product-container">
            <input type="text" placeholder="Search product by name" />
            <button type="button">Search</button>
            <h2> Or </h2>
            <input type="text" placeholder="Search product by company" />
            <button type="button">Search</button>
        </div>
   
    )
}

export default SearchProduct;