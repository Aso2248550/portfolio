import sql from "mssql";

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

let pool;

export async function sqlConnect() {
  if (!pool) {
    pool = await sql.connect(config);
  }
  return pool;
}

export async function getProducts() {
  try {
    const pool = await sqlConnect();
    const result = await pool.request().query(`
      SELECT productId, Title, Description, CategoryID, Price, Quantity, ProductImage
      FROM products
    `);
    return result.recordset;
  } catch (err) {
    console.error("❌ DB Error:", err);
    return [];
  }
}
