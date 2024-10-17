import React from 'react';
import '../style/services.css';

const servicesData = [
    { id: 1, name: 'Weather API Subscription', price: '$10/month', description: 'Get access to real-time weather data' },
    { id: 2, name: 'Premium Weather Insights', price: '$20/month', description: 'Detailed weather forecasts and analytics' },
    { id: 3, name: 'Weather Alerts Service', price: '$5/month', description: 'Receive alerts for severe weather conditions' },
];

const ServiceCard = ({ service }) => {
    return (
        <div className="service-card">
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <h3>{service.price}</h3>
            <button>Add to Cart</button>
        </div>
    );
};

const Services = () => {
    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <div className="services-grid">
                {servicesData.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
