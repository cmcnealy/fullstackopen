import React, {useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/personsService'


const App = () => {
    const [persons, setPersons] = useState([])
    const [newFilter, setNewFilter] = useState('')
    const [notification, setNotification] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        personsService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const removePerson = (id) => {
        const selected = persons.filter(person => person.id === id)
        const selectedName = selected[0].name
        if (window.confirm(`Delete ${selectedName}?`)) {
            personsService
                .remove(id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== id))
                    setNotification(`Removed ${selectedName}`)
                    setTimeout(() => setNotification(null), 3000)
                })
                .catch(error => {
                    console.log("fail")
                })
        }
    }

    const Notification = ({message}) => {
        if (message === null) {
            return null
        }

        return (
            <div className="notification">
                {message}
            </div>
        )
    }

    const ErrorMessage = ({message}) => {
        if (message === null) {
            return null
        }

        return (
            <div className="error">
                {message}
            </div>
        )
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={notification}/>
            <ErrorMessage message={errorMessage} />
            <Filter
                newFilter={newFilter}
                setNewFilter={setNewFilter}/>
            <h2>Add A New Entry</h2>
            <PersonForm
                persons={persons}
                setPersons={setPersons}
                setNotification={setNotification}
                setErrorMessage={setErrorMessage}/>
            <h2>Numbers</h2>
            <Persons persons={persons} newFilter={newFilter} removePerson={removePerson}/>
        </div>
    )
}

export default App