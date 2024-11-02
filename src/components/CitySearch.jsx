import React, { useState } from 'react';


function CitySearch({ onSearch }) {

  const [input, setInput] = useState('');


  const handleSubmit = (e) => {

    e.preventDefault();

    if (input.trim() !== '') {

      onSearch(input.trim());

    }

  };


  return (

    <form onSubmit={handleSubmit} className="d-flex justify-content-center mb-4">
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Enter city name"
      className="form-control me-2"
      style={{
        maxWidth: '300px',
        borderRadius: '8px',
        padding: '8px 12px',
        border: '1px solid #90caf9',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}
    />
    <button
      type="submit"
      className="btn btn-primary"
      style={{
        backgroundColor: '#1976d2',
        borderColor: '#1976d2',
        padding: '8px 16px',
        borderRadius: '8px'
      }}
    >
      Search
    </button>
  </form>
  

  );

}


export default CitySearch;
