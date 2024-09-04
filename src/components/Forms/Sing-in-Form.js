import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import de useDispatch
import '../../assets/css/main.css'; 
import { handleSubmit } from '../Button/handleSubmit'; 

function SignInForm() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Utilisation de useDispatch pour obtenir le dispatch

  const onSubmit = (event) => {
    handleSubmit(event, setError, navigate, dispatch); // Passez navigate et dispatch à handleSubmit
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignInForm;
