import { useState, useEffect } from 'react'
import CountryChart from './components/CountryChart'
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const sorted = data
          .map(country => ({
            name: country.name.common,
            population: country.population,
            continent: country.region
          }))
          .sort((a, b) => b.population - a.population)
          .slice(0, 10); // Get top 10 most populous countries

        setCountries(sorted);
      });
    }, []);

  return (
    <>
      <div style={{ padding: "2rem"}}>
        <h1>Top 10 des Pays selon leur population</h1>
        <CountryChart data={countries} />
      </div>
    </>
  )
}

export default App
