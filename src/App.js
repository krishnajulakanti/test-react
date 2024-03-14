import './App.css';
import React from 'react';
import { EmployeeProvider } from './components/Employee-Module/EmployeeContext';

function App() {

  return (
    <div className="App">
      <EmployeeProvider />
    </div>
  );
}

export default App;
