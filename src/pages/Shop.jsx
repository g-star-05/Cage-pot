import React, { useState } from "react";
import "./Shop.css";
import ShopNav from "../components/ShopNav/ShopNav";
import Footer from "../components/Footer/Footer";

import dogFood from "../assets/shop/dog-food.jpg";
import catToy from "../assets/shop/cat-toy.jpg";
import birdCage from "../assets/shop/bird-cage.jpg";
import leash from "../assets/shop/leash.jpg";

export default function Shop() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Premium Dog Food", price: 799, image: dogFood },
    { id: 2, name: "Cat Toy Ball Set", price: 299, image: catToy },
    { id: 3, name: "Bird Cage Deluxe", price: 1999, image: birdCage },
    { id: 4, name: "Leather Dog Leash", price: 499, image: leash },
  ];

  const addToCart = (product) => setCart((prev) => [...prev, product]);

  return (
    <>
      <ShopNav cartCount={cart.length} />
      <section className="shop-section">
        <div className="shop-container">
          <h1>Shop Now</h1>
          <p className="shop-tagline">
            Browse through our premium pet products 🐾
          </p>

          <div className="shop-grid">
            {products.map((product) => (
              <div className="shop-card" key={product.id}>
                <img src={product.image} alt={product.name} className="shop-card-img" />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button className="shop-btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
