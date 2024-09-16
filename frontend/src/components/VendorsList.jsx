import React, { useEffect, useState } from 'react';
import './components.css'; 

function VendorsList() {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        fetchVendors();
    }, []); 

    const fetchVendors = () => {
        let url = 'http://127.0.0.1:5000/vendors';
        fetch(url)
            .then(response => response.json())
            .then(data => setVendors(data))
            .catch(error => console.error('Error fetching vendors:', error));
    };

    return (
        <div className="vendors-list-container">
            <ul className="vendor-column-titles">
                <li>Name</li>
                <li>Phone</li>
                <li>Email</li>
                <li style={{ width: '30px' }}>Edit</li>
                <li style={{ width: '30px' }}>Delete</li>
            </ul>
            <ul className="vendors-list">
                {vendors.map((vendor) => (
                    <li key={vendor.id}>
                        <span> {vendor.name} </span>
                        <span> {vendor.phone_number} </span>
                        <span> {vendor.email} </span>
                        <span className="icon-span" style={{ width: '86px' }}> <i className="fas fa-wrench"></i> </span>
                        <span className="icon-span" style={{ width: '86px' }}> <i className="fas fa-trash-alt fa-lg" style={{ color: 'red' }}></i></span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VendorsList;