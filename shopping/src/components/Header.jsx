import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header style={{ padding: '10px 20px', background: '#007bff', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <h2>Shopping App</h2>
      <nav>
        <Link to="/home" style={{ color: 'white', marginRight: 20 }}>Home</Link>
        <Link to="/cart" style={{ color: 'white', marginRight: 20 }}>Cart ({cartItems.length})</Link>
        <button onClick={handleLogout} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>Logout</button>
      </nav>
    </header>
  );
}
