import React from 'react'

const Filter = ({ inputContact, onChange }) => {
  return(
    <div>
      Filter shown with: <input
          value={inputContact}
          onChange={onChange}
          placeholder='Persons filter'
        />
    </div>
  )
}

export default Filter