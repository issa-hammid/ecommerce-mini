"use client";

import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import "../../app/globals.css";
import { useCart } from "../context/CartContext";

export default function Header() {
    //destruction
    const {cartCount} = useCart()
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <span className="site-title">Ecommerce Mini</span>
        </Link>

        <nav className="header-actions">
          <Link href="/cart" className="cart-btn" aria-label="Open cart">
            <AiOutlineShoppingCart size={22} />
            <span className="cart-badge">
              {cartCount}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
