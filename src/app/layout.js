import "@/styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "My Portfolio",
  description: "Responsive Portfolio with Products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "#333", color: "white", padding: "1rem" }}>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{ backgroundColor: "#333", color: "white", textAlign: "center", padding: "1rem", marginTop: "2rem" }}>
          &copy; 2025 My Portfolio
        </footer>
      </body>
    </html>
  );
}
