import React from 'react'

const Contacts = ({ name, number, remove }) => {
  return (
    <li>
      {name} {number}
      <button onClick={remove}>delete</button>
    </li>
  )
}

export default Contacts