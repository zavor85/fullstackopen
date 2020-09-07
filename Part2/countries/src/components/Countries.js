import React from 'react'

const Countries = ({ name, handleShowCountryClick }) => {
  return (
  <div>
    {name}
    <button onClick={handleShowCountryClick}>Show</button>
  </div>  
  ) 
}

export default Countries