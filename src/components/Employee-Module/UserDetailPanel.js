import React, { useContext } from 'react'
import { CurrentUserContext } from '../../App';

const UserDetailPanel = () => {

  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div>
      <h2>You logged in as {currentUser.username}</h2>
    </div>
  )
}

export default UserDetailPanel