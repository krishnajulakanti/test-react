import React, { useEffect, useState } from 'react'

export const UseEffect_Timer = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer)
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default UseEffect_Timer