import React, { useState, useEffect } from 'react'
import CountriesList from './components/CountriesList'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesFilter, setCountriesFilter] = useState('')
  const [weatherData, setWeatherData] = useState([]);

  const countriesHook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(countriesHook, [])

  const weatherCapital = () => {
    const ACCESS_KEY = process.env.REACT_APP_API_KEY;
    const filterCount = [...countries].filter(
      item => item.name.toLowerCase().indexOf(countriesFilter.toLowerCase()) > -1)
    if (filterCount.length === 1) {
      axios
        .get(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${filterCount[0].capital}`)
        .then(response => {
          setWeatherData(response.data.current);
        });

    }
  }
  useEffect(weatherCapital, [countriesFilter])


  const handleFilterChange = (event) => {
    setCountriesFilter(event.target.value)
  }


  const allCountriesFilter = () => {
    return [...countries].filter(
      item => item.name.toLowerCase().indexOf(countriesFilter.toLowerCase()) > -1)
  }

  const setOneCapital = () => {
    const filterCount = [...countries].filter(
      item => item.name.toLowerCase().indexOf(countriesFilter.toLowerCase()) > -1)

    if (filterCount.length === 1) {
      return filterCount[0].capital
    }

  }


  const handleClick = (event) => {
    return setCountriesFilter(event.target.previousSibling.textContent.toLowerCase())
  }

  return (
    <div>
      <Filter
        inputFilter={countriesFilter}
        onChange={handleFilterChange}
      />
      <CountriesList
        list={allCountriesFilter()}
        handleClick={handleClick}
        capital={setOneCapital()}
        weatherData={weatherData}
      />
    </div>
  )
}

export default App 