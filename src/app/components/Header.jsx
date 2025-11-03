"use client";

import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import "../../app/globals.css";
export default function Header({ cartCount = 0 }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <span className="site-title">Ecommerce Mini</span>
        </Link>

        <nav className="header-actions">
          <button className="cart-btn" aria-label="Open cart">
            <AiOutlineShoppingCart size={22} />
            <span className="cart-badge" aria-hidden={cartCount === 0}>
              {cartCount}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
