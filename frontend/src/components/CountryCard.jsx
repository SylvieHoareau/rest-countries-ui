import {useState, useEffect} from "react";

const CountryCard = () => {

    const [countries, setCountries] = useState([]);
    
      useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
          .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            const sorted = data
              .map(country => ({
                name: country.name.common,
                flags: country.flags,
                capital: country.capital ? country.capital[0] : 'N/A',
                population: country.population,
                continent: country.region
              }))
              .sort((a, b) => b.population - a.population)
              .slice(0, 10); // Get top 10 most populous countries
    
            setCountries(sorted);
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
        }, []);

    return (
        <div className="country-card">
            {countries.map((country, index) => (
                <div key={index} className="country-card-item">
                    <h3>{country.name}</h3>
                    <img 
                        src={country.flags.svg} 
                        alt={`Flag of ${country.name}`} 
                        style={{ width: '100px', height: 'auto' }} 
                    />
                    <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
                    <p>Population: {country.population.toLocaleString()}</p>
                    <p>Continent: {country.continent}</p>
                </div>
            ))}
        </div>
    );

};

export default CountryCard;