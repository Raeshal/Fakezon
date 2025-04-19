import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Header from './components/Header';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/" />;
};

export default function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/product/:id" element={<PrivateRoute><ProductDetail /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
      </Routes>
    </>
  );
}
