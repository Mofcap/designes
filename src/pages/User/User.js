import React from 'react';
import UserAccounts from '../../components/account/UserAccounts'; 
import { useSelector } from 'react-redux';

function User() {

function UserProfile() {
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <p>Vous n'êtes pas connecté.</p>;
  }

  return (
    <div className="main bg-dark">
    <div className="header">
      <h1>Welcome back<br />Tony Jarvis!</h1>
      <button className="edit-button">Edit Name</button>
    </div>
    <h2 className="sr-only">Accounts</h2>
    <UserAccounts />
  </div>
  );
}


  
}

export default User;