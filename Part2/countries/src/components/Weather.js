import React from "react";


const Weather = ({ weatherData, capital }) => (
      {capital} && <>
      <div>   
            <h3>Weather in {capital}</h3>
            <p>Temperateure: {weatherData?.temperature} Celsius</p>
            <img src={weatherData?.weather_icons} alt={capital} />
            <p>{weatherData?.weather_descriptions} weather</p>
<p>Wind: {weatherData?.wind_speed} m/s, direction {weatherData?.wind_dir}</p>
      </div>
</>
);

export default Weather;