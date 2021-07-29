import React from "react";

const Persons = ({persons, newFilter, removePerson}) => {
    const selected = persons.filter(person =>
        person.name.toLowerCase().includes(newFilter.toLowerCase())
    );

    return (
        <>
            {selected.map(person => {
                return (
                    <div key={person.id}>
                        {person.name} {person.number}
                        <button onClick={() => removePerson(person.id)}>
                            delete
                        </button>
                    </div>
                )
            })}
        </>
    )
}

export default Persons