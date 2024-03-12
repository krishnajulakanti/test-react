import React, { useEffect, useState } from 'react'

const UseEffect_Namelist = () => {

    const [data, setData ] = useState([])
    const [isLoading, setLoading] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch("./namelist.json")
            .then(res => res.json())
            .then(res => {setData(res); console.log(res);})
        }, 2000)
    })
    
  return (
    <div>
          <h1>UseEffect_Namelist</h1>
          <ul>
              {data.map((item) => <li key={item.id}>{item.name}</li>)}
          </ul>
    </div>
  )
}

export default UseEffect_Namelist