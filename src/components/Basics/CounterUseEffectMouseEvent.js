import React, { useEffect, useState } from 'react'

export const CounterUseEffectMouseEvent = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('Mouse Event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect Called');
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component unmounted');
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            <p>X : {x}</p>
            <p>Y : {y}</p>
        </div>
    )
}

export default CounterUseEffectMouseEvent