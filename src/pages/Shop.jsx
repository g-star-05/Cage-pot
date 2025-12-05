import React, { useState } from "react";
import "./Shop.css";
import ShopNav from "../components/ShopNav/ShopNav";
import ProductCard from "../components/ProductCard/ProductCard";

import dogFood from "../assets/products/dog-food.jpg";
import catToy from "../assets/products/cat-toy.jpg";
import birdCage from "../assets/products/bird-cage.jpg";
import fishTank from "../assets/products/fish-tank.jpg";

const products = [
  { id: 1, name: "Premium Dog Food", category: "dogs", price: 799, img: dogFood },
  { id: 2, name: "Cat Plush Toy", category: "cats", price: 349, img: catToy },
  { id: 3, name: "Bird Cage Deluxe", category: "birds", price: 1199, img: birdCage },
  { id: 4, name: "Aquarium Tank Set", category: "fish", price: 2999, img: fishTank },
];

export default function Shop() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    if (!cart.includes(product.id)) {
      setCart([...cart, product.id]);
      alert(`${product.name} added to cart!`);
    }
  };

  const filtered = products.filter((p) => {
    const matchesCategory = category === "all" || p.category === category;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <ShopNav cartCount={cart.length} search={search} setSearch={setSearch} />

      <section className="shop-section">
        <h2 className="shop-title">Shop Our Pet Essentials 🐾</h2>

        <div className="category-tabs">
          {["all", "dogs", "cats", "birds", "fish"].map((cat) => (
            <button
              key={cat}
              className={`tab ${category === cat ? "active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="shop-grid">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </section>
    </>
  );
}