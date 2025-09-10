import React, { useState} from 'react';


function PayExpense() {

    const [selectedCategory, setSelectedCategory] = useState('');
    const [amount, setAmount] = useState('');
    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };
    const handleAmountChange = (event) => {
    const inputAmount = parseFloat(event.target.value);
    setAmount(isNaN(inputAmount) ? '' : inputAmount);
  };
    const handleSubmit = () => {
    console.log('Category:', selectedCategory);
    console.log('Amount:', amount);
  };
 
    return (
      
  <div >
        <div> <h3 style={{fontSize:24,textAlign:'center', fontWeight:'bolder'}}> Expense Payment </h3></div>
        <div style={{ display: 'flex', width: '100%', height: '500px' }}>
        <div style={{ flex: '1', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: 'auto' }}>
      <label htmlFor="category" style={{ marginBottom: '10px' }}>
        Choose a category:
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        style={{ padding: '8px', marginBottom: '10px' ,backgroundColor :'grey' }}>
        <option value="Supplies">Supplies</option>
        <option value="Utilities">Utilities</option>
        <option value="Maintenance">Maintenance</option>
        <option value="Other Expenses">Other Expenses</option>
      </select>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="amount" style={{ marginBottom: '10px' }}>
          Enter the amount:
        </label>
        <input
          type="number"
          id="amount"
          defaultValue={amount}
          onChange={handleAmountChange}
          style={{ padding: '8px', marginBottom: '20px', backgroundColor :'grey' }}
        />
      </div>
      <button style={{ backgroundColor: 'rgb(0, 136, 214)', height: '50px', width: '100px',
      borderRadius: '10px', marginTop: '20px' }} id="paySalary">Summit</button> 
    </div>
      </div>
      </div> 
      </div>      
    );
  }

  export default PayExpense;
