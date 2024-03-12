import React, { useState } from 'react'
import CounterUseEffectMouseEvent from './CounterUseEffectMouseEvent'

export const CounterUseEffectMouseEventCleanup = () => {

    const [display, setDisplay] = useState(true)

  return (
    <div>
        <button onClick={()=> setDisplay(!display)}>Toggle display</button>
        {display && <CounterUseEffectMouseEvent />}
    </div>
  )
}

export default CounterUseEffectMouseEventCleanup