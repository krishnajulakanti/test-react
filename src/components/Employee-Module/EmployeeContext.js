import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployee from './CreateEmployee';
import EmployeeList from './EmployeeList';
import Login from './Login';
import EditEmployee from './EditEmployee';
import UserDetailPanel from './UserDetailPanel';

export const EmployeeContext = createContext();
export const CurrentUserContext = createContext(null);

export const EmployeeProvider = () => {

  const [employeeList, setEmployeeList] = useState(() => {
    const savedState = sessionStorage.getItem('employeeList')
    return savedState ? JSON.parse(savedState) : []
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedState = sessionStorage.getItem('currentUser')
    return savedState ? JSON.parse(savedState) : []
  });

  useEffect(() => {
    sessionStorage.setItem('employeeList', JSON.stringify(employeeList))
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
  }, [employeeList, currentUser])

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <EmployeeContext.Provider value={{ employeeList, setEmployeeList }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='CreateEmployee' element={<CreateEmployee mode={true} />} />
            <Route path='EmployeeList' element={<EmployeeList />} />
            <Route path='EditEmployee/:id' element={<CreateEmployee mode={false} />} />
            <Route element={<UserDetailPanel />} />
          </Routes>
        </BrowserRouter>
      </EmployeeContext.Provider>
    </CurrentUserContext.Provider>
  );
};