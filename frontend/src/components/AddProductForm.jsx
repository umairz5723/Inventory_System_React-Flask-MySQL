import './components.css';
import React, { useState } from 'react';

function AddProductForm() {
    // Set the state of all the inputs, defaulting them to an empty string
    const [productName, setProductName] = useState('');
    const [barcode, setBarcode] = useState('');
    const [weight, setWeight] = useState('');
    const [weightMeasurement, setWeightMeasurement] = useState('fl');  // Default to 'fl'
    const [productCompany, setProductCompany] = useState('');
    const [productType, setProductType] = useState('');
    const [thresholdAmount, setThresholdAmount] = useState('');
    const [vendorId, setVendorId] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Basic validation
        if (!vendorId || !productName || !barcode || !weight || !productCompany || !productType || !thresholdAmount || !sellingPrice) {
            setErrorMessage('All fields are required.');
            return;
        }
    
        // Creating the object to be sent
        const formData = {
            vendorId,
            productName,
            barcode,
            weight,
            weightMeasurement,
            productCompany,
            productType,
            thresholdAmount,
            sellingPrice
        };
    
        // Sending the object to the backend
        fetch('http://localhost:5000/create-product', {  // Update with actual backend URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'error') {
                // Handle error response from backend
                setErrorMessage(data.message);
                setSuccessMessage('');
            } else {
                // Handle success response from backend
                setSuccessMessage(data.message);
                setErrorMessage('');
                // Reset form fields after successful submission
                setProductName('');
                setBarcode('');
                setWeight('');
                setWeightMeasurement('fl');  // Reset to default
                setProductCompany('');
                setProductType('');
                setThresholdAmount('');
                setVendorId('');
                setSellingPrice('');
            }
        })
        .catch((error) => {
            setErrorMessage('Failed to add product: ' + error.message);
            setSuccessMessage('');
        });
    };

    return (
        <div className="product-form-container">
            <h2>Create New Product</h2>
            <form onSubmit={handleSubmit}>
                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
                <div>
                    <label>Vendor ID:</label>
                    <input type="text" value={vendorId} onChange={(e) => setVendorId(e.target.value)} />
                </div>
                <div>
                    <label>Product Name:</label>
                    <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
                </div>
                <div>
                    <label>Product Barcode:</label>
                    <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} />
                </div>
                <div>
                    <label>Weight:</label>
                    <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div>
                    <label>Weight Measurement:</label>
                    <select value={weightMeasurement} 
                    onChange={(e) => setWeightMeasurement(e.target.value)} 
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    >
                        <option value="fl">fluid ounce</option>
                        <option value="oz">ounce</option>
                        <option value="g">grams</option>
                        <option value="gal">gallon</option>
                        <option value="l">liter</option>
                    </select>
                </div>
                <div>
                    <label>Product Company:</label>
                    <input type="text" value={productCompany} onChange={(e) => setProductCompany(e.target.value)} />
                </div>
                <div>
                    <label>Product Type:</label>
                    <input type="text" value={productType} onChange={(e) => setProductType(e.target.value)} />
                </div>
                <div>
                    <label>Threshold Amount:</label>
                    <input type="text" value={thresholdAmount} onChange={(e) => setThresholdAmount(e.target.value)} />
                </div>
                <div>
                    <label>Selling Price:</label>
                    <input type="text" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProductForm;
