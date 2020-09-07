import React from 'react'
import Weather from './Weather'

const Country = ({ name, capital, population, languages, flag, weatherData, weatherCapital }) => {

const countryLanguages = languages.map(item => <li key={item.name}>{item.name}</li>)

  return (
    <div>
      <h1>{name}</h1>
      <div>Capital {capital}
        <br />
      Population {population}
      </div>
      <h2>Languages</h2>
      <ul>
        {countryLanguages}
      </ul>
      <img src={flag} alt={name} height='100px'/>
      <Weather  weatherData={weatherData} capital={weatherCapital}/>
    </div>
  )
}

export default Country