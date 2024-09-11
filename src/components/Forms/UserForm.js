import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleUserFormSubmit } from '../Button/handleUserFormSubmit'; 
import '../../assets/css/main.css';

function UserForm({ onCancel }) {
  const dispatch = useDispatch();
  const { firstName, lastName, userName } = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token); 
  const [newUsername, setNewUsername] = useState(userName);

  const onSubmit = (e) => {
    handleUserFormSubmit(e, newUsername, dispatch, token); 
    onCancel(); // Cacher le formulaire après la soumission
  };

  return (
    <div className='forma'>
      <form className="form-user" onSubmit={onSubmit}>
        <h1>Edit User Info</h1>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            readOnly
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            readOnly
          />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default UserForm;
