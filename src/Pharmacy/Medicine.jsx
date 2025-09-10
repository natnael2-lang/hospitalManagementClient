import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useSnackbar } from 'notistack'; // Import useSnackbar
import './componentsPharma/medi.css';

function Medicine() {
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [unit, setUnit] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [expiryDate, setExpiryDate] = useState('');
  // const navigate = useNavigate();
  // const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();

    const medicineData = {
      name,
      manufacturer,
      unit,
      type,
      quantity,
      expiryDate
    };

    axios.post('/medicines', medicineData)
      .then(() => {
       // enqueueSnackbar('Medicine added successfully', { variant: 'success' });
        // navigate('/');
        alert("Medicine added successfully");
      })
      .catch((error) => {
       // enqueueSnackbar('Failed to add medicine. Please try again later.', { variant: 'error' });
        console.error('Error adding medicine:', error);
        alert("Error Adding medicine");
      });
  };

  return (
    <div>
      <h1>Medicine Info</h1>
      <form onSubmit={handleSubmit} className="medicine-f11">
        <label htmlFor="name">Medicine Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="medicineFieldIn"
        />
        <label htmlFor="manufacturer">Medicine Manufacturer:</label>
        <input
          type="text"
          id="manufacturer"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          required
          className="medicineFieldIn"
        />

        <label htmlFor="unit">Unit:</label>
        <input
          type="text"
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          required
          className="medicineFieldIn"
        />

        <label htmlFor="type">Medicine Type:</label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          className="medicineFieldIn"
        />

        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="date"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
          className="medicineFieldIn"
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          placeholder="3"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className="medicineFieldIn"
        />

        <button type="submit" className="add-medicineButton">
          Add Medicine
        </button>
      </form>
    </div>
  );
}

export default Medicine;
