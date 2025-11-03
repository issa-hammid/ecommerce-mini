"use client";

import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductSkeleton from "./components/ProductSkeleton";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false)
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Our Products</h1>
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
       {loading ? (
  Array(8).fill().map((_, i) => <ProductSkeleton key={i} />)
) : (
  products.map(product => <ProductCard key={product.id} product={product} />)
)}

      </main>
    </>
  );
}
