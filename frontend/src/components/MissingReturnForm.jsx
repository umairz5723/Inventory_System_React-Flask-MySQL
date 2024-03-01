import React, { useState } from 'react';
import './components.css';

function MissingReturnForm() {
    const [reason, setReason] = useState('');
    const [amount, setAmount] = useState('');

    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Reason:', reason);
        console.log('Amount to remove:', amount);
    };

    return (
        <div className="missing-return-form-container">
            <h2>Removal Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="reason">Reason:</label>
                    <input 
                        type="text" 
                        id="reason" 
                        name="reason" 
                        placeholder="Enter reason" 
                        value={reason} 
                        onChange={handleReasonChange} 
                    />
                </div>
                <div className="missing-return-form-group">
                    <label htmlFor="amount">Amount to remove:</label>
                    <input 
                        type="number" 
                        id="amount" 
                        name="amount" 
                        placeholder="Enter amount" 
                        value={amount} 
                        onChange={handleAmountChange} 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MissingReturnForm;