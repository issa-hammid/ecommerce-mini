import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Ecommerce Mini",
  description: "Frontend Task - Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer>
          <p>© 2025 Ecommerce Mini</p>
        </footer>
      </body>
    </html>
  );
}
