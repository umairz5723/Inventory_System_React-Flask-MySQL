import { useEffect, useState } from 'react';
import './components.css';

function OrdersList() {

    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetchOrders();
    }, []);
    
    const fetchOrders = ( () => {
        let url = 'http://127.0.0.1:5000/orders';
        fetch(url)
            .then(response => response.json())
            .then(data => setOrders(data))
            .catch(error => console.error('Error fetching orders list:', error));

    });

    return (
        <div className = "products-list-container">
            <ul className="column-titles">
                <li>ID</li>
                <li>Name</li>
                <li>Company</li>
                <li>Weight</li>
                <li>Current Stock</li>
                <li>Threshold</li>
            </ul>
            <ul className="vendors-list">
                {orders.map((order) => (
                    <li key={order.id}>
                        <span> {order.id} </span>
                        <span> {order.name} </span>
                        <span> {order.company} </span>
                        <span> {order.weight} </span>
                        <span> {order.remaining_quanitity} </span>
                        <span> {order.threshold_amount} </span>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OrdersList;