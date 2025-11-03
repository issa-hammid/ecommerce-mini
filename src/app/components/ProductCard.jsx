import "./ProductCard.css";
import Link from "next/link";
export default function ProductCard({ product }) {
  const handleAddToCart = () => {
    alert(`${product.title} added to cart! 🛒`);
  };

  return (
    <Link href={`/product/${product.id}`} className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />

      <h3 className="product-title">{product.title.slice(0, 40)}...</h3>

      <p className="product-price">${product.price.toFixed(2)}</p>

      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        🛒 Add to Cart
      </button>
    </Link>
  );
}
