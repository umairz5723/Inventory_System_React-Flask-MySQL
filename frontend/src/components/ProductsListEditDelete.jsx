import './components.css';

function ProductsListEditDelete() {
    return (
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
        </div>
    );
}

export default ProductsListEditDelete;