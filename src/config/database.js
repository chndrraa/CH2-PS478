const mariadb = require('mariadb');

const dbPool = mariadb.createPool({
  host: '34.128.104.156',
  user: 'ch2-ps478',
  password: '0987654321',
  database: 'capstone',
  charset: 'utf8mb4',
  collation: 'utf8mb4_unicode_ci',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function executeQuery(sqlQuery, params) {
  let conn;

  try {
    conn = await dbPool.getConnection();
    const result = await conn.query(sqlQuery, params);
    return result;
  } catch (error) {
    throw error;
  } finally {
    if (conn) {
      conn.release(); // Release the connection back to the pool
    }
  }
}

module.exports = { executeQuery };