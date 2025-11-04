import "./ProductCard.css";
import Link from "next/link";
// Using context to access the global addToCart function
import { useCart } from "../context/CartContext";
export default function ProductCard({ product, showToast }) {
  const {addToCart} = useCart()

  const handleAddToCart = (product) => {
    addToCart(product);
    showToast(`${product.title.slice(0, 25)}... added to cart!`);
  };

  return (
    <>
      <div className="product-card">
        <Link href={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />

          <h3 className="product-title">{product.title.slice(0, 40)}...</h3>

          <p className="product-price">${product.price.toFixed(2)}</p>
        </Link>
        {/*When button is clicked, product is added to the cart*/} 
       <button className="add-to-cart-btn" onClick={()=> handleAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </>
  );
}
