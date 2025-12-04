import React from "react";
import "./ShopNav.css";
import { Link } from "react-router-dom";

export default function ShopNav({ cartCount = 0 }) {
  return (
    <header className="shopnav">
      <div className="shopnav-container">
        {/* Search bar with cart beside it (mobile aligned) */}
        <div className="shopnav-search-wrapper">
          <div className="shopnav-search">
            <input type="text" placeholder="Search products..." />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="shopnav-search-icon"
            >
              <path
                fillRule="evenodd"
                d="M8.5 3a5.5 5.5 0 014.39 8.894l3.107 3.108a.75.75 0 01-1.06 1.06l-3.108-3.107A5.5 5.5 0 118.5 3zm0 1.5a4 4 0 100 8 4 4 0 000-8z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Cart beside search (in mobile view, stays aligned) */}
          <Link to="/shop" className="shopnav-cart" aria-label="Cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="shopnav-cart-icon"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14.26l.84-1.68h8.79c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0021 3H6.21l-.94-2H1v2h3l3.6 7.59-1.35 2.44A2 2 0 006 17h12v-2H7.42c-.14 0-.25-.11-.26-.24z" />
            </svg>
            {cartCount > 0 && <span className="shopnav-cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
