import React from 'react'

const Countries = ({countries, filter, setFilter}) => {
    const selectedCountries = countries
        .filter(country => country.name.toLowerCase().includes(filter.toLowerCase()));

    if (selectedCountries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    } else if (selectedCountries.length === 1) {
        const country = selectedCountries[0]
        return (
            <div>
                <h1>{country.name}</h1>
                <div>capital {country.capital}</div>
                <div>population {country.population}</div>
                <h2>Languages</h2>
                <ul>
                    {country.languages.map(language => {
                        return (<li key={language.name}>{language.name}</li>)
                    })}
                </ul>
                <img
                    src={country.flag}
                    alt={"flag"}
                    style={{width: "500px"}}
                />
                <h2>Weather in {country.capital}</h2>
                <div>temperature: {}</div>
            </div>
        )
    } else {
        return (
            <div>
                {selectedCountries
                    .map(country => {
                        return (
                            <div
                                key={country.numericCode}>
                                {country.name}
                                <button onClick={() => setFilter(country.name)}>show</button>
                            </div>)
                    })}
            </div>
        )
    }
}

export default Countries