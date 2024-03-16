import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import { EmployeeModule } from './components/Employee-Module/EmployeeModule';


export const CurrentUserContext = createContext(null);

function App() {

  const [currentUser, setCurrentUser] = useState(() => {
    const savedState = sessionStorage.getItem('currentUser')
    return savedState ? JSON.parse(savedState) : []
  });

  useEffect(() => {
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <div className="App">
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <EmployeeModule />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
