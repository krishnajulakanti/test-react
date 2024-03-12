import React, { useEffect, useState } from 'react'

export const UseEffect_Basics = () => {

    const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);
    
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default UseEffect_Basics