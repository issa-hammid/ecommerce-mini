"use client";
import "./cart.css";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa6";

export default function CartPage() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <main className="cart-page">
      <h1 className="cart-title"> Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>No Product Yet</p>
          <Link href="/"> Back to shop</Link>
        </div>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />

              <div className="cart-details">
                <span className="cart-title-text">{item.title}</span>
                <span className="cart-price">${item.price}</span>
              </div>

              <div className="cart-quantity">
                <button
                  className="qty-btn"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  <FaMinus size={12} />
                </button>
                <span>{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => increaseQuantity(item.id)}
                >
                  <FaPlus size={12} />
                </button>
              </div>

              <div className="cart-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                <FaTrash size={14} />
              </button>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
            <button className="checkout-btn"> Checkout</button>
          </div>
        </div>
      )}
    </main>
  );
}
