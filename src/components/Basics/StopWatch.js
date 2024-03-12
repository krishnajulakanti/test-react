import React, { useEffect, useState } from 'react'

export const StopWatch = () => {

  const [time, updateTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => updateTime(prevTime => prevTime + 1), 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);
  

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    updateTime(0);
  };

  return (
    <div>
      <h1>StopWatch</h1>
      <p>{time}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

// export default StopWatch

function Counter() {  // to multiple with 2 on every click
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}