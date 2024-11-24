// src/pages/ProductDetailPage.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../features/productSlice";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { product, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  if (status === "loading") {
    return <p className="text-center">Loading product details...</p>;
  }

  if (status === "failed") {
    return (
      <p className="text-center text-red-500">Error loading product: {error}</p>
    );
  }

  if (!product) {
    return null; // Or display a message
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product details */}
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded"
          />
        </div>
        {/* Product Info */}
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="mb-6">{product.description}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
