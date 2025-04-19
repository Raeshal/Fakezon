import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const handleCheckout = () => {
    clearCart();

    Swal.fire({
      title: 'Success!',
      text: 'Order placed successfully!',
      icon: 'success',
      confirmButtonText: 'OK',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false
    });
  };

  return (
    
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price}
                <button style={{
      backgroundColor: '#dc3545',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      margin:'auto'
    }} onClick={() => removeFromCart(item.id)} >Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
          <button style={{
      backgroundColor: 'green',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer'
      
    }} onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
}
