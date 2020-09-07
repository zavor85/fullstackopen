import React from 'react'

const PersonForm = ({ inputName, inputNameChange, inputNumber, inputNumberChange, handleOnSubmit }) => {
  return (
    <form onSubmit={handleOnSubmit}>
        <div>
          name: <input
            value={inputName}
            placeholder='New Name'
            onChange={inputNameChange}
          />
        </div>
        <div>
          number: <input
            value={inputNumber}
            placeholder='Your Number'
            onChange={inputNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm
