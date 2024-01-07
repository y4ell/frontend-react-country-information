import './App.css';
import axios from 'axios';
import {useState} from 'react';
import world_map from './assets/world_map.png'
import getRegion from "../Helpers/getRegion.js";

function App() {

    //
    // const [countries, setCountries] = useState([])
    const [error, setError] = useState('')
    // async function fetchCountries() {
    //     try {
    //         const result = await axios.get('https://restcountries.com/v3.1/all')
    //         console.log(result.data);
    //         setCountries(result.data);
    //         const sortedCountries = result.data.sort((a, b) => a.population - b.population);
    //         setCountries(sortedCountries);
    //     }      catch (e) {
    //         console.error(e);
    //         console.log('de statuscode van de fout is ' + e.response.status);
    //         setError('Er is iets misgegaan. Probeer het opnieuw')
    //     }
    // }


    // ik moet een usestate maken voor wat de gebruiker invult. en de usestate van wat de gebruiker invult
    // moet ik gebruiken om het land te filteren.
    // die moet hij eerst in all caps maken (? misschien?)
    // en dan hij moet loopen door alle landen met de filter methode op het land

    const [countryInfo, setCountryInfo] = useState('')
    const [inputCountry, setInputCountry] = useState('')
    async function fetchCountry () {
        try {
            const result = await axios.get(`https://restcountries.com/v3.1/name/${inputCountry}`)
            const country = response.data;
            console.log(country)
            setCountryInfo(country)
        }
        catch (e) {
            console.error(e);
            console.log('de statuscode van de fout is ' + e.response.status);
            setError(`${searchQuery} bestaat niet. Probeer het opnieuw`)
        }
    }



    return (
        <>

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

            {error && <p>{error}</p>}







            {/* <img src={world_map} alt="Wereldkaart" className="map"/>*/}

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
        </>
    )
}

export default App

