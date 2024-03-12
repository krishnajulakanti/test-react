import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const EditEmployee = ({ employeeList, updateState }) => {

  const { id } = useParams();

  console.log(employeeList, "EDIT");
  const navigate = useNavigate()

  const [employee, setEmployee] = useState(
    {
      id: '',
      name: '',
      state: '',
      city: '',
      pincode: ''
    }
  );

  let editEmp = {};

  useEffect(() => {
    editEmp = employeeList.find((emp) => emp.id === id)
    console.log(editEmp, "useState");

    setEmployee({
      ...employee, 
      id: editEmp.id,
      name: editEmp.name,
      state: editEmp.state,
      city: editEmp.city,
      pincode: editEmp.pincode })
  }, [id])

  let updateEmployee = {
    id: employee.id,
    name: employee.name,
    state: employee.state,
    city: employee.city,
    pincode: employee.pincode
  }

  function Submit(event) {
    event.preventDefault();
    const updatedList = employeeList.filter((emp) => { return emp.id !== id });
    updateState([updateEmployee, ...updatedList])

    setEmployee(
      {
        name: '',
        state: '',
        city: '',
        pincode: ''
      }
    );

    navigate('/EmployeeList');
  }

  function Cancel() {
    navigate('/EmployeeList');
  }

  return (
    <div className='container'>
      <label className='heading'>Edit Employee</label>
      <div>
        <form onSubmit={Submit}>
          <input type="text" placeholder="name" value={employee.name} onChange={(e) => { setEmployee({ ...employee, name: e.target.value }) }} /><br />
          <br />
          <input type="text" placeholder="state" value={employee.state} onChange={(e) => { setEmployee({ ...employee, state: e.target.value }) }} /><br />
          <br />
          <input type="text" placeholder="city" value={employee.city} onChange={(e) => { setEmployee({ ...employee, city: e.target.value }) }} /><br />
          <br />
          <input type="text" placeholder="pincode" value={employee.pincode} onChange={(e) => { setEmployee({ ...employee, pincode: e.target.value }) }} /><br />
          <br />
          <button onClick={Cancel}>Cancel</button> &nbsp;
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EditEmployee