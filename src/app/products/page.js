import { getProducts } from "@/lib/db";
import Image from "next/image";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <section style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>My Products</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "2rem"
      }}>
        {products.length === 0 && <p>No products found.</p>}

        {products.map((product) => (
          <div key={product.productId} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            overflow: "hidden",
            textAlign: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}>
            {product.ProductImage ? (
              <Image
                src={`/images/products/${product.ProductImage}`}
                alt={product.Title}
                width={400}
                height={300}
                style={{ objectFit: "cover", width: "100%", height: "200px" }}
                priority
              />
            ) : (
              <div style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#eee",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                No Image
              </div>
            )}

            <div style={{ padding: "1rem" }}>
              <h2>{product.Title}</h2>
              <p>{product.Description}</p>
              <p>Category: {product.CategoryID}</p>
              <p>Quantity: {product.Quantity}</p>
              <p style={{ fontWeight: "bold" }}>${product.Price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
