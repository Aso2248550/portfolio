import Link from "next/link";

export default function HomePage() {
  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to My Portfolio</h1>
      <p>Check out my products below!</p>
      <Link href="/products" style={{ marginTop: "1rem", display: "inline-block", backgroundColor: "#333", color: "white", padding: "0.5rem 1rem", borderRadius: "5px" }}>
        View Products
      </Link>
    </section>
  );
}
