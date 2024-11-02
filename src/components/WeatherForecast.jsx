import React from 'react';


function WeatherForecast({ forecast, unit }) {

    const convertTemp = (temp) => (unit === 'C' ? temp : (temp * 1.8 + 32).toFixed(2));


    return (

        <div className="container mt-4 p-4 border rounded shadow-sm" style={{ background: 'linear-gradient(135deg, rgba(169, 135, 250, 0.7), rgba(255, 182, 193, 0.5))' }}>
        <h2 className="text-center mb-4">5-Day Forecast</h2>
        <div className="row justify-content-center">
            {/* Mapping through the forecast for 5 days */}
            {forecast.map((temp, index) => (
                <div key={index} className="col-12 col-md-4 mb-3 d-flex justify-content-center">
                    <div className="card text-center" 
                         style={{ 
                             width: '100%', 
                             maxWidth: '250px', 
                             background: 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)', 
                             color: '#333', 
                             border: 'none',  // Ensure no border is interfering
                             boxShadow: 'none' // Remove any shadow if necessary
                         }}>
                        <div className="card-body">
                            <h5 className="card-title mb-2">Day {index + 1}</h5>
                            <p className="card-text display-6 mb-0">{convertTemp(temp)}°{unit}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    


    );

}


export default WeatherForecast;
