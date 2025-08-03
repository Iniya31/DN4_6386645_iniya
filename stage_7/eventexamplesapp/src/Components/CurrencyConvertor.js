import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);
  const conversionRate = 0.011; 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const converted = parseFloat(rupees) * conversionRate;
    setEuros(converted.toFixed(2));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount in ₹:
          <input
            type="number"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
            required
          />
        </label>
        <button type="submit">Convert</button>
      </form>
      {euros !== null && <p>Equivalent in €: {euros}</p>}
    </div>
  );
}

export default CurrencyConvertor;