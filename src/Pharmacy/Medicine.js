import React, { useState } from 'react';
import axios from 'axios';

function Medicine() {
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [unit, setUnit] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState(1); 
  const [expiryDate, setExpiryDate] = useState('');
  const [accessiblity,setAccessibility]=useState("local")

  const handleSubmit = (e) => {
    e.preventDefault();

    const medicineData = {
      name,
      manufacturer,
      unit,
      type,
      quantity,
      expiryDate,
      accessiblity
    };

    axios.post(`${process.env.REACT_APP_CURRENT_URL}/pharmacist/sellMedicine`, medicineData,{withCredentials:true})
      .then(() => {
        alert("Medicine added successfully");
        setName("");
        setQuantity("");
        setExpiryDate("");
        setAccessibility("local");
        setManufacturer("");
        setType("");
        setUnit("");
        
      })
      .catch((error) => {
        console.error('Error adding medicine:', error);
        alert("Error Adding medicine");
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Add Medicine</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Medicine Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700">Manufacturer:</label>
          <input
            type="text"
            id="manufacturer"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="unit" className="block text-sm font-medium text-gray-700">Unit:</label>
          <input
            type="text"
            id="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Medicine Type:</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date:</label>
          <input
            type="date"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity:</label>
          <input
            type="text"
            id="quantity"
           
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Accessiblity:</label>
          <select className='form-select mt-1 block w-full outline-none bg-slate-200' onChange={(e)=>setAccessibility(e.target.value)} value={accessiblity}>
            <option name="local" defaultChecked>
             Local
            </option>
            <option name="referal">
              Referal
            </option>
          </select>
        </div>

        <button type="submit" className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Add Medicine
        </button>
      </form>
    </div>
  );
}

export default Medicine;