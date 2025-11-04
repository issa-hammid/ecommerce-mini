"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import "./ProductDetails.css";
import ProductSkeleton from "./ProductSkeleton";
export default function ProductDetailsPage() {

  //useParams to extract the dynamic product ID from the URL
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //useCart context provides global cart state and addToCart method
  const {addToCart} = useCart()
  useEffect(() => {
    //useEffect to fetch product data when the page loads
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <ProductSkeleton />;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  
const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
  <div className="product-details-container">
    <img
      src={product.image}
      alt={product.title}
      className="product-details-image"
    />

    <div className="product-details-info">
      <h1 className="product-details-title">{product.title}</h1>
      <p className="product-details-description">{product.description}</p>
      <p className="product-details-price">${product.price}</p>

      <button onClick={()=>handleAddToCart(product)} className="add-to-cart-btn">
         Add to Cart
      </button>
    </div>
  </div>
);

}
