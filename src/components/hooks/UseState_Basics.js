import React, { useState } from 'react'

export const UseState_Basics = () => {
  // we initialize our State by calling useState, which accepts an initial state and returns two values: a) current state b) function that updates the state.

  const [color, setColor] = useState('red'); // => it is ntg but destructuring the returned values from useState.
  // color => current state
  // setColor => function that is used to update our state.
  // useState() can accept a number, boolean, string, array, object or combination of these as its value/property.

  const [car, setCar] = useState({
    brand: "Ford",
    mode: "Mustang",
    year: "1964",
    color: "red"
  })

  return (
    <div>
      <h1>My fav color is {color}</h1>
      <button type='button' onClick={() => { setColor('Blue') }}>Change color</button>

      {/* suppose we want to update only the car color then we cannot use setCar({color: "blue"}) which would remove other values. Instead use Spread operator. */}
      <h2>My {car.brand} is a {car.color} car.</h2>
      <button type='button' onClick={() => setCar(prevState => { return { ...prevState, color: "blue" } })}>Change color</button>
    </div>
  )
}

export default UseState_Basics