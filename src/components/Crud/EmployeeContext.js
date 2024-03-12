import React, { createContext, useContext, useState } from 'react';
import CreateEmployee from './CreateEmployee';
import EmployeeList from './EmployeeList';

export const EmployeeContext = createContext();

export const EmployeeProvider = () => {

  const [employeeList, setEmployeeList] = useState([]);

  return (
    <EmployeeContext.Provider value={{ employeeList, setEmployeeList }}>
      <CreateEmployee />
      <EmployeeList />
    </EmployeeContext.Provider>
  );
};