import React from 'react';
import CountryCard from './CountryCard';
import './CountryGallery.css';

const CountryGallery = ({ countries }) => {
    return (
        <div className="country-gallery">
            <h1>Galerie des Pays</h1>
            <div className="gallery-grid">
                {countries.map((country, index) => (
                    <CountryCard key={index} country={country} />
                ))}
            </div>
        </div>
    );
}

export default CountryGallery;