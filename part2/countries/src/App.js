import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Countries from './components/Countries'

function App() {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        <>
            <div>
                find countries
                <input
                    value={filter}
                    onChange={handleFilterChange}/>
            </div>
            <Countries countries={countries} filter={filter} setFilter={setFilter}/>
        </>
    );
}

export default App;
