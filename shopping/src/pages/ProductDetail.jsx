import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';
import { ClipLoader } from 'react-spinners'; 


export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart!',
      showConfirmButton: false,
      timer: 1500,
      toast: true,
      position: 'top-end'
    });
  };

  if (!product) {
    return (
      <div className="loader-container">
        <ClipLoader color="#36d7b7" size={60} />
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} height={180} />
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <button onClick={handleAddToCart} style={{
      backgroundColor: 'green',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer'
    }}>Add to Cart</button>
    </div>
  );
}
