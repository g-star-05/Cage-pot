import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} className="product-img" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
