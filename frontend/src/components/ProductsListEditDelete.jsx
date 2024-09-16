import React, { useEffect, useState } from 'react';
import './components.css';

function ProductsListEditDelete() {

    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [companyName, setCompanyName] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []); 

    const fetchProducts = () => {
        let url = 'http://127.0.0.1:5000/searchProducts?';
    
        // Include product name if provided
        if (productName) {
            url += `name=${productName}`;
        }

        // Include company name if provided
        if (companyName) {
        
            url += `company=${companyName}`;
        }
    
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    };

    const handleNameInputChange = (event) => {
        setProductName(event.target.value);
        // Clear company name if product name is being entered
        if (event.target.value && companyName) {
            setCompanyName('');
        }
        
    };

    const handleCompanyInputChange = (event) => {
        setCompanyName(event.target.value);
        // Clear product name if company name is being entered
        if (event.target.value && productName) {
            setProductName('');
        }
    };

    const handleSearch = () => {
        fetchProducts();
    }

    return (
        <div> 
            <div className="search-product-container">
                <input
                    type="text"
                    placeholder="Search product by name"
                    value={productName}
                    onChange={handleNameInputChange}
                />
                <h2> Or </h2>
                <input
                    type="text"
                    placeholder="Search product by company"
                    value={companyName}
                    onChange={handleCompanyInputChange}
                />
                <button type="button" onClick={handleSearch}>Search</button>
            </div>  
            <div className = "products-list-container">
                <ul className="column-titles">
                    <li>ID</li>
                    <li>Name</li>
                    <li>Company</li>
                    <li>Weight</li>
                    <li>Price</li>
                    <li>Stock</li>
                    <li>Edit</li>
                    <li>Delete</li>
                </ul>
                <ul className="product-list">
                    {products.map(product => (
                        <li key={product.product_id}>
                            <span id = "product-id"> {product.product_id} </span>
                            <span id = "product-name"> {product.name} </span>
                            <span id = "product-company"> {product.company} </span>
                            <span id = "product-weight"> {product.weight} </span>
                            <span id = "product-price"> {product.price} </span>
                            <span id = "product-stock"> {product.stock} </span>
                            <span id = "product-edit"> <i className="fas fa-wrench"></i> </span>
                            <span id = "product-delete"> <i className="fas fa-trash-alt fa-lg" style={{ color: 'red' }}></i></span>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default ProductsListEditDelete;