import React, { useState, useEffect } from 'react'

import ContactsList from './components/ContactsList'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personFilter, setPersonFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])



  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleNameChange = (event) => {
    setNewPerson(event.target.value)
  }
  const handleFilterChange = (event) => {
    setPersonFilter(event.target.value)
  }

  const handleOnSubmit = (event) => {
      event.preventDefault()
      const newContact = {
        id: persons.length + 1,
        name: newPerson,
        date: new Date().toISOString(),
        number: newNumber
      }
      setPersons(persons.concat(newContact))
      setNewPerson('')
      setNewNumber(persons.concat(newContact))
      setNewNumber('')
  
    persons.map(person => {
      if (person.name === newPerson) {
        alert(`${newPerson} is already added to phonebook`)
      }
      return newPerson
    })
  }

  const contactsFilter = () => {

    if (personFilter === "") {
      return persons
    }
    return [...persons].filter(
      item => item.name.toLowerCase().indexOf(personFilter.toLowerCase()) > -1)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        inputContact={personFilter}
        onChange={handleFilterChange}
      />
      <h3>Add a new</h3>
      <PersonForm
        inputName={newPerson}
        inputNameChange={handleNameChange}
        inputNumber={newNumber}
        inputNumberChange={handleNumberChange}
        handleOnSubmit={handleOnSubmit}
      />
      <h3>Numbers</h3>
      <ContactsList
        list={contactsFilter()}
      />
    </div>
  )
}

export default App 