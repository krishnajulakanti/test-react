import React from 'react'
import NameListPersonNames from './NameListPersonNames';

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Apple'
        },
        {
            id: 2,
            name: 'Bat'
        },
        {
            id: 3,
            name: 'Cat'
        }
    ];

    // const personList = persons.map(person => <h1>I am {person.name}</h1>)
    const personList = persons.map(person => <NameListPersonNames key={person.id} person={person}/>)
  
    return (
    <div>{personList}</div>
  )
}

export default NameList