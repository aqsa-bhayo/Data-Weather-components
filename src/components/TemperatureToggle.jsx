import React from 'react';


function TemperatureToggle({ unit, onToggle }) {

    return (
        <div className="d-flex justify-content-center align-items-center mt-4 fw-bold">
            <button
                onClick={() => onToggle(unit === 'C' ? 'F' : 'C')}
                className="btn btn-outline-primary"
                style={{
                    
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
