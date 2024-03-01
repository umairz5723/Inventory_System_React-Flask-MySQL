import './components.css';

function OrdersList() {
    return (
        <div className = "products-list-container">
            <ul className="column-titles">
                <li>ID</li>
                <li>Name</li>
                <li>Company</li>
                <li>Weight</li>
                <li>Stock</li>
                <li>Threshold</li>
            </ul>
        </div>
    );
}

export default OrdersList;