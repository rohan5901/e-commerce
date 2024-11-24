// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          E-Shop
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/products" className="hover:text-blue-500">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-blue-500">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/account" className="hover:text-blue-500">
                Account
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
