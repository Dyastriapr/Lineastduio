import mysql from 'mysql2/promise';

// Pastikan DB_PORT dibaca sebagai angka
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || '3306', 10), // <-- BARIS INI PENTING
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;