import React from 'react';


function WeatherForecast({ forecast, unit }) {

    const convertTemp = (temp) => (unit === 'C' ? temp : (temp * 1.8 + 32).toFixed(2));


    return (

        <div className="container mt-4 p-4 border rounded shadow-sm" style={{ background: 'linear-gradient(135deg, rgba(113, 211, 224, 0.5), rgba(192, 128, 234, 0.5))' }}>
        <h2 className="text-center mb-4">5-Day Forecast</h2>
        <div className="row justify-content-center">
            {forecast.map((temp, index) => (
                <div key={index} className="col-md-2 col-sm-4 col-6 mb-3">
                    <div className="card text-center h-100 border-0">
                        <div className="card-body p-3 bg-primary text-white rounded">
                            <h5 className="card-title">Day {index + 1}</h5>
                            <p className="card-text display-6">{convertTemp(temp)}°{unit}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    


    );

}


export default WeatherForecast;
