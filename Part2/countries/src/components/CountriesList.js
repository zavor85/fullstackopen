import React from "react";
import Countries from "./Countries";
import Country from "./Country"


const CountriesList = ({ list, handleClick, capital, weatherData }) => {
  if (list.length > 10 && list.length < 249) {
    return <p>Too many matches, specify another filter</p>
  } else if (list.length > 249) {
    return <p>Which country are You looking for?</p>
  } else if (list.length === 1) {

    return list.map(item => 
        <Country
          key={item.name}
          name={item.name}
          capital={item.capital}
          population={item.population}
          languages={item.languages}
          flag={item.flag}
          weatherData={weatherData}
          weatherCapital={capital}
        />  
    )
  } 
    return list.map(item => 
        <Countries
          key={item.name}
          name={item.name}
          handleShowCountryClick={handleClick}
          
        />
    )
};

export default CountriesList;