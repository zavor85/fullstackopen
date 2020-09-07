import React from 'react'

const Filter = ({ inputFilter, onChange }) => {
  return(
    <div>
      Find countries: <input
          value={inputFilter}
          onChange={onChange}
          placeholder='Countries filter'
        />
    </div>
  )
}

export default Filter