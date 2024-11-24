// src/pages/HomePage.jsx
import React from "react";
import Counter from "../components/Counter";
import ProductList from "../components/ProductList";
import ImageCarousel from "../components/ImageCarousel";

const HomePage = () => {
  return (
    <div className="home-page">
      <ImageCarousel />

      {/* Hero Section */}
      <section className="hero bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-xl mb-8">
            Discover our collection of amazing products.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded">
            Shop Now
          </button>
        </div>
      </section>
      <Counter />
      {/* Product List */}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
          <ProductList />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
