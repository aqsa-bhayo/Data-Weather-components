import React from 'react';


function TemperatureToggle({ unit, onToggle }) {

  return (
<div className="d-flex justify-content-center align-items-center mt-4 fw-bold">
            <button
                onClick={() => onToggle(unit === 'C' ? 'F' : 'C')}
                className="btn btn-outline-primary"
                style={{
                    maxWidth: '200px',  // Limiting max width
                    width: '100%',       // Makes it responsive to its container
                    height: '50px',      // Fixed height to prevent stretching
                    padding: '8px 16px', // Adjusted padding
                    borderRadius: '8px',
                    fontSize: '14px',    // Smaller font size
                    background: 'linear-gradient(135deg, rgba(135, 206, 250, 0.9), rgba(70, 130, 180, 0.8))',
                    borderColor: '#64b5f6',
                    color: '#fff',
                    transition: 'background-color 0.3s, transform 0.3s',
                    cursor: 'pointer',
                    fontWeight: "bold"
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, rgba(100, 149, 237, 0.8), rgba(30, 144, 255, 0.7))'}
                onMouseOut={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, rgba(135, 206, 250, 0.9), rgba(70, 130, 180, 0.8))'} // Fixed gradient
            >
                Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
            </button>
        </div>

  
  );

}


export default TemperatureToggle;
