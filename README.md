# Ecommerce Mini App – Next.js Frontend Task

A minimal **e-commerce mini app** built with **Next.js (App Router)** and **React**  
to demonstrate key frontend concepts such as hooks, context, dynamic routes, and component communication.

---

## Overview

This project is part of a frontend task requiring the implementation of **1–2 e-commerce features** using React and Next.js fundamentals.

Implemented Features:
1. **Product Listing Page** with product fetching and skeleton loading.
2. **Product Details Page** with “Add to Cart” functionality.
3. **Global Cart Context** for managing cart state across pages.
4. **Toast Notifications** using `react-toastify` for better UX.

---

## Core Concepts Demonstrated

| Concept | Where Implemented | Description |
|----------|-------------------|--------------|
| **useState** | In `page.js`, `ProductDetailsPage`, and `CartContext` | Manage component and global states like products, loading, and cart items. |
| **useEffect** | In `page.js` and `ProductDetailsPage` | Fetch products from the Fake Store API on mount. |
| **useContext** | In all components using `useCart()` | Share cart state globally (count, add/remove, quantity). |
| **Dynamic Route** | `/product/[id]/page.js` | Displays individual product details dynamically. |
| **Props (Parent → Child)** | `HomePage → ProductCard` | Passes each product as props to display data. |
| **Callback (Child → Parent)** | `ProductCard → HomePage` (via `showToast`) | Demonstrates child-to-parent communication by triggering toast messages in parent from child actions. |

---

## Features Implemented

### Product Listing
- Fetches product data from [FakeStoreAPI](https://fakestoreapi.com/products).
- Displays a responsive grid of product cards.
- Uses a **loading skeleton** until data is fetched.
- Each product links to its **details page** via dynamic routing.

### Product Details Page
- Dynamic route: `/product/[id]`.
- Displays product image, title, description, and price.
- "Add to Cart" button integrated with global `CartContext`.
- Triggers toast notification on add (demonstrating callback communication).

### Cart Context (Global State)
- Implemented in `src/app/context/CartContext.js`.
- Functions: `addToCart`, `removeFromCart`, `increaseQuantity`, `decreaseQuantity`.
- Provides total cart count to the **Header**.
- Accessible from any component using `useCart()` hook.

### Toast Notifications
- Added using [`react-toastify`]
- Shows feedback messages when adding products to the cart.
- Improves user experience and demonstrates child-to-parent event handling.

---

## Technologies Used

- **Next.js +** (App Router)
- **React 18**
- **react-toastify** – for user notifications
- **Fake Store API** – for mock product data
- **CSS Modules** – for scoped component styling