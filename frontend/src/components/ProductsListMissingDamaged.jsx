import './components.css';

function ProductsListMissingDamaged() {
    return (
        <div className = "products-list-container">
            <ul className="column-titles">
                <li>ID</li>
                <li>Name</li>
                <li>Company</li>
                <li>Weight</li>
                <li>Price</li>
                <li>Stock</li>
                <li>Confirm</li>
            </ul>
        </div>
    );
}

export default ProductsListMissingDamaged;