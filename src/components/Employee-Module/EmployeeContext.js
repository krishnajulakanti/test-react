import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployee from './CreateEmployee';
import EmployeeList from './EmployeeList';
import Login from './Login';
import EditEmployee from './EditEmployee';

export const EmployeeContext = createContext();

export const EmployeeProvider = () => {

  const [employeeList, setEmployeeList] = useState(() => {
    const savedState = sessionStorage.getItem('employeeList')
    return savedState ? JSON.parse(savedState) : []
  });

  useEffect(() => {
    sessionStorage.setItem('employeeList', JSON.stringify(employeeList))
  }, [employeeList])

  return (
    <EmployeeContext.Provider value={{ employeeList, setEmployeeList }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='CreateEmployee' element={<CreateEmployee mode={true} />} />
          <Route path='EmployeeList' element={<EmployeeList />} />
          <Route path='EditEmployee/:id' element={<CreateEmployee mode={false} />} />
        </Routes>
      </BrowserRouter>
    </EmployeeContext.Provider>
  );
};