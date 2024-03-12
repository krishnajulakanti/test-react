import React, { useState, useEffect, useContext } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import './Styles.css'

const CreateEmployee = ({ employeeList, updateState, mode }) => {

  const navigate = useNavigate()

  const [employee, setEmployee] = useState(
    {
      name: '',
      state: '',
      city: '',
      pincode: ''
    }
  );
  
  let newEmployee = {
    id: uuidv4(),
    name: employee.name,
    state: employee.state,
    city: employee.city,
    pincode: employee.pincode
  }

  function Submit(event) {
    event.preventDefault();
    updateState([newEmployee, ...employeeList])

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
      {mode ? <label className='heading'>Create Employee</label> : <label className='heading'>Edit Employee</label>}
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

export default CreateEmployee