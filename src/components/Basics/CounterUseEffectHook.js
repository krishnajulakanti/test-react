import React, { useEffect, useState } from 'react'

export const CounterUseEffectHook = () => {
    
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    const Increment = () => {
        return setCount((count) => count + 1)
    }

    useEffect(() => {
        console.log('updated');
        document.title = `Clicled ${count} times`
    }, [count])

  return (
    <div>
        <h1>Count: {count}</h1>
        <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default CounterUseEffectHook