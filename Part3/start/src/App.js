import React, { useState, useEffect } from 'react'

import ContactsList from './components/ContactsList'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personFilter, setPersonFilter] = useState('')
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')


  const hook = () => {
    personService
      .getAll()
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
      .catch(error => {
        console.log('fail')
      })
  }
  useEffect(hook, [])

  const removePerson = (personToDel) => {
    if (window.confirm(`Delete ${personToDel.name}?`)) {
      console.log(`${personToDel.name} has been Deleted`)
      personService
        .remove(personToDel.id)
        .then(item => setPersons(persons.filter(person => person.id !== personToDel.id)))
        .then(item => setMessage(`${personToDel.name} has been Deleted`))
        .catch(error => {
          console.log(error.name)
          if (error.name === 'Error') {
            setMessage(`Contact with name ${personToDel.name}, already deleted`)
            setMessageType('error')
            setNewPerson('')
            setNewNumber('')
            updateInfo()
          }
        })

    }
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleNameChange = (event) => {
    setNewPerson(event.target.value)
  }
  const handleFilterChange = (event) => {
    setPersonFilter(event.target.value)
  }

  const updateInfo = () => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const personExist = persons.find(person => person.name === newPerson);

    if (personExist) {
      window.confirm(`${newPerson} is already added to phonebook, replace the old number with a new one`)
      const personForChange = {
        name: newPerson,
        date: new Date().toISOString(),
        number: newNumber
      }
      personService
        .update(personExist.id, personForChange)
        .then(updatedPerson => {
          setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person))
          setMessage(`${newPerson} number Updated`)
          setMessageType('message')
          setNewPerson('')
          setNewNumber('')
          updateInfo()

        })
        .catch(error => {
          console.log(error.name)
          if (error.name === 'Error') {
            setMessage(`Contact with name ${newPerson}, already deleted`)
            setMessageType('error')
            setNewPerson('')
            setNewNumber('')
            updateInfo()
          }
        })
    }
    else {
      const newContact = {
        name: newPerson,
        date: new Date().toISOString(),
        number: newNumber
      }
      personService
        .create(newContact)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewNumber(persons.concat(response.data))
          setNewPerson('')
          setNewNumber('')
          setMessage(`${newPerson} Added`)
          setMessageType('message')
        })
        .catch(error => {
          setMessage(error.response.data.error);
          setMessageType('error');
        })
    }
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
      <Notification
        message={message}
        setMessage={setMessage}
        messageType={messageType}
        setMessageType={setMessageType}
      />
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
        remove={removePerson}
      />
    </div>
  )
}

export default App 