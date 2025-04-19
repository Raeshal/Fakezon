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
    <header
  style={{
    padding: '12px 24px',
    background: '#343a40',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}
>
  <h1 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 'bold', letterSpacing: '1px' }}>
    🛒 Shopping App
  </h1>
      <nav style={{ padding: '10px' }}>
  <Link
    to="/home"
    style={{
      backgroundColor: '#28a745',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '5px',
      textDecoration: 'none',
      marginRight: '10px'
    }}
  >
    Home
  </Link>

  <Link
    to="/cart"
    style={{
      backgroundColor: '#ffc107',
      color: 'black',
      padding: '8px 16px',
      borderRadius: '5px',
      textDecoration: 'none',
      marginRight: '10px'
    }}
  >
    Cart ({cartItems.length})
  </Link>

  <button
    onClick={handleLogout}
    style={{
      backgroundColor: '#dc3545',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      fontSize: 'larger'
    }}
  >
    Logout
  </button>
</nav>

    </header>
  );
}
