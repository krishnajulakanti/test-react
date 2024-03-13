import './App.css';
import React from 'react';
import { EmployeeProvider } from './components/Crud/EmployeeContext.js';

function App() {

  return (
    <div className="App">
      <EmployeeProvider />
    </div>
  );
}

export default App;
