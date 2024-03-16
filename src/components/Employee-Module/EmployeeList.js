import { React, useContext } from 'react'
import { Link } from 'react-router-dom'
import './Styles.css'
import { EmployeeContext } from './EmployeeContext';
import UserDetailPanel from './UserDetailPanel';

const EmployeeList = () => {

  const { employeeList, setEmployeeList } = useContext(EmployeeContext);

  function DeleteRecord(id) {
    const updatedList = employeeList.filter((emp) => { return emp.id !== id });
    setEmployeeList(updatedList);
  }

  return (
    <div className='container'>
      <div>
        <UserDetailPanel />
      </div>
      <label className='heading'>Employee List</label>
      <div>
        <Link to='/CreateEmployee'>
          <button type='button' >Create</button>
        </Link>
      </div>
      <br /><br />
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>State</th>
              <th>City</th>
              <th>Pincode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id='tableBody'>
            {employeeList?.map((user, index) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.state}</td>
                <td>{user.city}</td>
                <td>{user.pincode}</td>
                <td>
                  <Link to={`/EditEmployee/${user.id}`}>
                    <button type='button'>Edit</button>
                  </Link>&nbsp;
                  <button type='button' onClick={() => DeleteRecord(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeeList