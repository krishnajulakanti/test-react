import React, { useState } from 'react'

export const CounterUseStateHook = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    return setCount((count) => count + 1)
  }

  const IncrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      Increment();
    }
  }

  const Decrement = () => {
    return setCount((count) => count - 1)
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={IncrementByFive}>Increment by 5</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

// export default Counter