import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import CreateEmployee from "./CreateEmployee";
import EmployeeList from "./EmployeeList";
import EditEmployee from "./EditEmployee";

function App() {

  const [employeeList, setEmployeeList] = useState(() => {
    const savedState = sessionStorage.getItem('employeeList')
    return savedState ? JSON.parse(savedState) : []
  });

  const updateState = (newEmployee) => { setEmployeeList(newEmployee) }

  useEffect(() => {
    sessionStorage.setItem('employeeList', JSON.stringify(employeeList))
  }, [employeeList])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='CreateEmployee' element={<CreateEmployee employeeList={employeeList} updateState={updateState} mode={true} />} />
          <Route path='EmployeeList' element={<EmployeeList employeeList={employeeList} updateState={updateState} />} />
          <Route path='EditEmployee/:id' element={<EditEmployee employeeList={employeeList} updateState={updateState} mode={false} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;