import Header from "./components/Header";
import "./globals.css";

// CartProvider wraps the entire app to share cart state globally
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // for style toast

export const metadata = {
  title: "Ecommerce Mini",
  description: "Frontend Task - Next.js",
};

export default function RootLayout({ children }) {
  // Header and footer are displayed on all pages
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
        <main>{children}</main>
        <footer>
          <p>© 2025 Ecommerce Mini by NEXT.js</p>
        </footer>
        <ToastContainer position="top-right" autoClose={1500} />
        </CartProvider>
        
      </body>
    </html>
  );
}
