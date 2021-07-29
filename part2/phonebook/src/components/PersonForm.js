import React, {useState} from "react";
import personsService from '../services/personsService'

const PersonForm = ({persons, setPersons, setNotification, setErrorMessage}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addEntry = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber
        }
        if (persons.filter(person => person.name === newName).length === 0) {
            personsService
                .create(nameObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                    setNotification(`Added ${newName}`)
                    setTimeout(() => setNotification(null), 3000)
                })
        } else {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                const oldPerson = persons.filter(person => person.name === newName)[0]
                const updatedPerson = {...oldPerson, number: newNumber}
                personsService
                    .update(oldPerson.id, updatedPerson)
                    .then(returnedPerson => {
                        const newPersons = persons.filter(person => person.id !== returnedPerson.id)
                        setPersons(newPersons.concat(returnedPerson))
                        setNewName('')
                        setNewNumber('')
                        setNotification(`Updated ${newName}`)
                        setTimeout(() => setNotification(null), 3000)
                    })
                    .catch(error => {
                        setErrorMessage(`${newName} was already deleted from the server`)
                        setPersons(persons.filter(p => p.id !== oldPerson.id))
                        setNewName('')
                        setNewNumber('')
                        setTimeout(() => setErrorMessage(null), 5000)
                    })
            }
        }
    }

    return (
        <form onSubmit={addEntry}>
            <div>name: <input
                value={newName}
                onChange={handleNameChange}/>
            </div>
            <div>
                number: <input
                value={newNumber}
                onChange={handleNumberChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm