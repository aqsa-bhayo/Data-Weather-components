import React from 'react';


function CurrentWeather({ weather, unit }) {

    if (!weather) return null;



    return (

        <div className="row justify-content-center">
            {/* First Row: Temperature, Humidity, Wind */}
            <div className="col-md-4 col-sm-6 col-12 mb-3">
                <div className="card text-center h-100 border-0" style={{ background: 'linear-gradient(135deg, rgba(169, 135, 250, 0.7), rgba(255, 182, 193, 0.7))' }}>
                    <div className="card-body p-3 rounded" style={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                        <i className="fas fa-thermometer-half fa-2x mb-2" style={{ color: '#ff7043' }}></i>
                        <p style={{ fontSize: '14px', textAlign: 'center' }}><strong>Temperature:</strong><br /> {weather.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mb-3">
                <div className="card text-center h-100 border-0" style={{ background: 'linear-gradient(135deg, rgba(169, 135, 250, 0.7), rgba(255, 182, 193, 0.7))' }}>
                    <div className="card-body p-3 rounded" style={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                        <i className="fas fa-tint fa-2x mb-2" style={{ color: '#03a9f4' }}></i>
                        <p style={{ fontSize: '14px', textAlign: 'center' }}><strong>Humidity:</strong><br /> {weather.humidity}%</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mb-3">
                <div className="card text-center h-100 border-0" style={{ background: 'linear-gradient(135deg, rgba(169, 135, 250, 0.7), rgba(255, 182, 193, 0.7))' }}>
                    <div className="card-body p-3 rounded" style={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                        <i className="fas fa-wind fa-2x mb-2" style={{ color: '#8e24aa' }}></i>
                        <p style={{ fontSize: '14px', textAlign: 'center' }}><strong>Wind:</strong><br /> {weather.wind} {unit === 'metric' ? 'km/h' : 'mph'}</p>
                    </div>
                </div>
            </div>

            {/* Second Row: Condition, Cloud Cover */}
            <div className="col-md-4 col-sm-6 col-12 mb-3">
                <div className="card text-center h-100 border-0" style={{ background: 'linear-gradient(135deg, rgba(169, 135, 250, 0.7), rgba(255, 182, 193, 0.7))' }}>
                    <div className="card-body p-3 rounded" style={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                        <i className="fas fa-cloud-sun fa-2x mb-2" style={{ color: '#ffa726' }}></i>
                        <p style={{ fontSize: '14px', textAlign: 'center' }}><strong>Condition:</strong><br /> {weather.condition}</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mb-3">
                <div className="card text-center h-100 border-0" style={{ background: 'linear-gradient(135deg, rgba(169, 135, 250, 0.7), rgba(255, 182, 193, 0.7))' }}>
                    <div className="card-body p-3 rounded" style={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                        <i className="fas fa-cloud fa-2x mb-2" style={{ color: '#90a4ae' }}></i>
                        <p style={{ fontSize: '14px', textAlign: 'center' }}><strong>Cloud Cover:</strong><br /> {weather.cloudCover}%</p>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default CurrentWeather;
