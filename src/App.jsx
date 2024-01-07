import './App.css';
import axios from 'axios';
import {useState} from 'react';
import world_map from './assets/world_map.png';
import getPopulation from './Helpers/getPopulation.js';
import getRegion from './Helpers/getRegion.js';

function App() {

    const [countries, setCountries] = useState([])
    const [error, setError] = useState('')
    const [countryInfo, setCountryInfo] = useState('')
    const [inputCountry, setInputCountry] = useState('')


    async function fetchCountries() {
        try {
            const result = await axios.get('https://restcountries.com/v3.1/all')
            console.log(result.data);
            setCountries(result.data);
            const sortedCountries = result.data.sort((a, b) => a.population - b.population);
            setCountries(sortedCountries);
        }      catch (e) {
            console.error(e);
            console.log('de statuscode van de fout is ' + e.response.status);
            setError('Er is iets misgegaan. Probeer het opnieuw')
        }
    }


    async function fetchCountry (event) {
        event.preventDefault();
        setError('');

        try {
            const result = await axios.get(`https://restcountries.com/v3.1/name/${inputCountry}`)
            const country = result.data[0];
            console.log(country);
            setCountryInfo(country);
            setInputCountry('')
        }
        catch (e) {
            console.error(e);
            console.log('de statuscode van de fout is ' + e.response.status);
            setError(`${inputCountry} bestaat niet. Probeer het opnieuw`)
        }
    }

    return (
        <>

             <img src={world_map} alt="Wereldkaart" className="map"/>

            {countries.length === 0 && <button type="button" onClick={fetchCountries}>
                zie de landen
            </button>}
            {error && <p>{error}</p>}

            {countries.length > 0 && <ul>
                {countries.map((country)=> {
                    return <li key={country}>
                        <img src={country.flags.png} alt="Landvlag" className="countryFlag"/>
                        <h3 className={getRegion(country.region)}>{country.name.common}</h3>
                        <p>Has a population of {country.population} people</p></li>
                })}
            </ul>
            }

            <form onSubmit={fetchCountry}>
                <input
                    type="text"
                    id="input"
                    name="input-country"
                    placeholder="Bijvoorbeeld Nederland of Peru"
                    value={inputCountry}
                    onChange={(e) => setInputCountry(e.target.value)}
                />
                <button type="submit">Zoek</button>
            </form>

            {error && <h1>{error}</h1>}

            {Object.keys(countryInfo).length > 0 &&
                <article>
                    <img src={countryInfo.flags.png} alt={"Landvlag"}/>
                    <h1>{countryInfo.name.common}</h1>
                    <p>{countryInfo.name.common} is situated in {countryInfo.subregion} and the capital is {countryInfo.capital}
                    It has a population of {getPopulation(countryInfo.population)} million people and it borders with {countryInfo.borders.length} neighboring countries.
                    Websites can be found on <code>{countryInfo.tld[0]}</code></p>
                </article>
            }

            {/*Landen met minder grote population? lukt niet daardoor miss??*/}
            </>

                )}

export default App