import React, { useState } from 'react';
import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // ✅ CSS file for styling

export default function Login() {
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(username, password);
      localStorage.setItem('token', token);
      navigate('/home');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}
