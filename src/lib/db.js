import sql from "mssql";

const config = {
  user: "asosalih_SQLLogin_1",      // user id from connection string
  password: "Aso#1963_123",         // pwd from connection string
  server: "aso_db1.mssql.somee.com", // data source / server
  database: "aso_db1",              // initial catalog
  options: {
    encrypt: true,                  // required for Azure/Somee
    trustServerCertificate: true,   // per connection string
  },
  // Optional: packetSize if needed
  // pool: { max: 10, min: 0, idleTimeoutMillis: 30000 }
};

let pool;

export async function getProducts() {
  try {
    if (!pool) {
      pool = await sql.connect(config);
    }
    const result = await pool.request().query(`
      SELECT productId, Title, Description, CategoryID, Price, Quantity, ProductImage
      FROM products
    `);
    return result.recordset;
  } catch (err) {
    console.error("DB Error:", err);
    return [];
  }
}
