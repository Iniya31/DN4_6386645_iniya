import React from 'react';

function OfficeSpace() {
  // Object representing one office
  const mainOffice = {
    name: 'Skyview Corporate Tower',
    rent: 55000,
    address: '15th Floor, Anna Salai, Chennai'
  };

  // List of multiple offices
  const officeList = [
    { name: 'Innovate Hub', rent: 62000, address: 'Taramani Tech Park' },
    { name: 'Vision Point', rent: 48000, address: 'Nungambakkam High Road' },
    { name: 'Alpha Works', rent: 75000, address: 'OMR, Chennai' }
  ];

  // JSX Inline CSS Style
  const imageStyle = {
    width: '300px',
    borderRadius: '10px',
    marginBottom: '20px'
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
     
      <h1>Office Space Rental Portal</h1>

      <img 
        src="https://via.placeholder.com/300x200?text=Office+Space" 
        alt="Office Space" 
        style={imageStyle} 
      />

      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {mainOffice.name}</p>
      <p><strong>Address:</strong> {mainOffice.address}</p>
      <p style={{ color: mainOffice.rent < 60000 ? 'red' : 'green' }}>
        <strong>Rent:</strong> ₹{mainOffice.rent}
      </p>

      <h2>Other Available Offices</h2>
      {officeList.map((office, index) => (
        <div key={index} style={{ marginBottom: '15px' }}>
          <p><strong>Name:</strong> {office.name}</p>
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default OfficeSpace;