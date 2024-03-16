import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import './Styles.css'
import { EmployeeContext } from './EmployeeContext';
import UserDetailPanel from './UserDetailPanel';

const CreateEmployee = ({ mode }) => {

  const { employeeList, setEmployeeList } = useContext(EmployeeContext);

  const navigate = useNavigate()

  const [employee, setEmployee] = useState(
    {
      name: '',
      state: '',
      city: '',
      pincode: ''
    }
  );

  // For EDIT scenario - To display the record for which Edit is to be done

  const { id } = useParams(); // To get the record ID for Editing the record.

  let editEmp = {}; // To store the record to be edited

  useEffect(() => {  // To patch the existing record in the Form
    if (!mode) {
      editEmp = employeeList.find((emp) => emp.id === id)

      setEmployee({
        ...employee,
        id: editEmp.id,
        name: editEmp.name,
        state: editEmp.state,
        city: editEmp.city,
        pincode: editEmp.pincode
      })
    }
  }, [id])

  // EDIT scenario END

  function Submit(event) {
    event.preventDefault();

    if (mode) { // For Create scenario
      let newEmployee = {
        id: uuidv4(),
        name: employee.name,
        state: employee.state,
        city: employee.city,
        pincode: employee.pincode
      }
      setEmployeeList([newEmployee, ...employeeList]);
    }
    else { // For EDIT scenario
      let updateEmployee = { // to save the Edited emp data
        id: employee.id,
        name: employee.name,
        state: employee.state,
        city: employee.city,
        pincode: employee.pincode
      }
      const updatedList = employeeList.filter((emp) => { return emp.id !== id }); // removing edited emp from the existing list, so that edited record can be pushed in next step.

      setEmployeeList([updateEmployee, ...updatedList])
    }

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
      <div>
        <UserDetailPanel />
      </div>
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