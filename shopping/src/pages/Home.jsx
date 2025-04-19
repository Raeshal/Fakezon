import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import "./Home.css";
import { useCart } from "../context/CartContext"; // ✅ import context

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // ✅ use the cart context

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); // ✅ pass product
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart!',
      showConfirmButton: false,
      timer: 1500,
      toast: true,
      position: 'top-end'
    });
  };

  return (
    <div className="home-container">
      <h2 className="home-title">All Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-img"
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
            <div className="product-selection">
              <Link to={`/product/${product.id}`} className="product-link">
                View
              </Link>
              <button
                  onClick={() => handleAddToCart(product)} // ✅ pass current product
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                    marginLeft: "10px"
                  }}
                >
                  Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
