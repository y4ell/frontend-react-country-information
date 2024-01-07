import {useState} from 'react';
import axios from 'axios';
import getRegionClass from './helpers/getRegionClass.js';
import formatPopulation from './helpers/formatPopulation.js';
import worldMap from './assets/world_map.png';
import spinningGlobe from './assets/spinning-globe.gif';
import './App.css';

function App() {
    const [countries, setCountries] = useState([]);
    const [countryInfo, setCountryInfo] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState('');

    async function fetchCountries() {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            console.log(response.data);

            // sorteer de huidige data array op de populatie-property van elk land
            response.data.sort((a, b) => {
                return a.population - b.population;
            });

            // geef de gesorteerde data array mee aan de functie die de elementen op de pagina injecteert
            setCountries(response.data);

        } catch (e) {
            console.error(e);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setError('');

        try {
            // probeer de gegevens over dit land op te halen
            const response = await axios.get(`https://restcountries.com/v3.1/name/${searchQuery}`);
            // wanneer je de gegevens bekijkt, zul je zien dat data een array is met lengte 1. Om alleen het object op te slaan, gebruiken we [0]
            const country = response.data[0];
            console.log(country);
            // sla de informatie van dat land op in de state
            setCountryInfo(country);
            // maak het invoerveld weer leeg
            setSearchQuery('');
        } catch (e) {
            console.error(e);
            // is er iets misgegaan? Vul dan de error-message box met de volgende elementen:
            setError(`${searchQuery} bestaat niet. Probeer het opnieuw.`);
        }
    }

    return (
        <>
            <header>
                <img src={worldMap} alt="Kaart van alle contintenten in de wereld" className="world-map"/>
            </header>
            <main>
                <section className="page-section-column">
                    <h2>World Regions</h2>
                    {countries.length > 0
                        ? <ul className="country-list">
                            {countries.map((country) => {
                                return (
                                    <li key={country.name.common}>
                                        <img src={country.flags.svg} alt={`Vlag van ${country.name.common}`} className="flag"/>
                                        <span className={getRegionClass(country.region)}>{country.name.common}</span>
                                        <p className="population">Has a population of {country.population} people</p>
                                    </li>
                                )
                            })}
                        </ul>
                        : <button type="button" onClick={fetchCountries}>Alle landen ophalen</button>
                    }
                </section>
                <section className="page-section-column">
                    <h2>Search country information</h2>
                    <img src={spinningGlobe} alt="Spinng globe"/>
                    <form className="search-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="query"
                            id="query-field"
                            placeholder="Bijvoorbeeld Nederland of Peru"
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                        />
                        <button type="submit">Zoek</button>
                        {error && <span id="error-message">{error}</span>}
                    </form>
                    {Object.keys(countryInfo).length > 0 &&
                        <article className="search-result-box">
                            <span className="flag-title-container">
                              <img src={countryInfo.flags.svg} alt="vlag" className="flag"/>
                              <h2>{countryInfo.name.common}</h2>
                            </span>
                            <p>{countryInfo.name.common} is situated in {countryInfo.subregion} and the capital
                                is {countryInfo.capital[0]}</p>
                            <p>It has a population of {formatPopulation(countryInfo.population)} people and it borders
                                with {countryInfo.borders.length} neighboring countries</p>
                            <p>Websites can be found on <code>{countryInfo.tld[0]}</code> domain's</p>
                        </article>
                    }
                </section>
            </main>
        </>
    )
}

export default App;