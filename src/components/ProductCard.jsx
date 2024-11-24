// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded shadow hover:shadow-lg transition duration-300">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-t"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          <Link to={`/product/${product.id}`} className="hover:text-blue-500">
            {product.name}
          </Link>
        </h3>
        <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
