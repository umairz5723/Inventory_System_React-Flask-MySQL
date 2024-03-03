import './components.css';
import React, { useState } from 'react';

function AddProductForm() {

    // Set the state of all the inputs we are about to create, default them to an empty string
    const [productName, setProductName] = useState('');
    const [barcode, setBarcode] = useState('');
    const [weight, setWeight] = useState('');
    const [weightMeasurement, setWeightMeasurement] = useState('');
    const [productCompany, setProductCompany] = useState('');
    const [productType, setProductType] = useState('');
    const [thresholdAmount, setThresholdAmount] = useState('');


    // Submit buttons actions
    // Create an object "formData" that will contains all the necessary user input we just recieved
    // Send the data to the backend using fetch
    // Lastly reset all of the inputs to an empty string again.
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Creating the object to be sent
        const formData = {
            productName,
            barcode,
            weight,
            weightMeasurement,
            productCompany,
            productType,
            thresholdAmount
        };

        // Sending the object to the backend
        fetch('http://your-backend-api-url/create-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Reset form fields after successful submission
            setProductName('');
            setBarcode('');
            setWeight('');
            setWeightMeasurement('');
            setProductCompany('');
            setProductType('');
            setThresholdAmount('');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className = "product-form-container">
            <h2>Create New Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name:</label>
                    <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
                </div>
                <div>
                    <label>Barcode:</label>
                    <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} />
                </div>
                <div>
                    <label>Weight:</label>
                    <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div>
                    <label>Weight Measurement:</label>
                    <input type="text" value={weightMeasurement} onChange={(e) => setWeightMeasurement(e.target.value)} />
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
                <button type="submit"> Add Product </button>
            </form>
        </div>
    );
}

export default AddProductForm;