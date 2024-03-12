import React, { useState } from 'react'

export const CounterUseStateHookWithObject = () => {
    const [name, setName] = useState({ fName: '', lName: '' })

    return (
        <div>
            <form>
                <input type='text' value={name.fName} onChange={e => setName({ ...name, fName: e.target.value })}></input>
                <h2>Your First Name : {name.fName}</h2>
                <input type='text' value={name.lName} onChange={e => setName({ ...name, lName: e.target.value })}></input>
                <h2>Your Last Name : {name.lName}</h2>

                <h1>{JSON.stringify(name)}</h1>
            </form>
        </div>
    )
}

export default CounterUseStateHookWithObject


// Multiple Input Fields
// You can control the values of more than one input field by adding a name attribute to each element.
// We will initialize our state with an empty object.
// To access the fields in the event handler use the event.target.name and event.target.value syntax.
// To update the state, use square brackets[bracket notation] around the property name.

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name: <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} /></label>
      <label>Enter your age: <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} /></label>
      <input type="submit" />
    </form>
  )
}

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}.</p>
      <button type="button" onClick={updateColor}>Blue</button>
    </div>
  )
}