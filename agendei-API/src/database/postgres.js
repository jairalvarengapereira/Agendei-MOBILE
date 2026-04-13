import pg from "pg";

const { Pool } = pg;

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  family: 4,
});

db.connect((err, client, release) => {
  if (err) {
    console.error(`Erro ao conectar o banco de dados: ${err.message}`);
  } else {
    release();
    console.log("Banco de dados PostgreSQL conectado com sucesso.");
  }
});

function query(command, params = []) {
  return db.query(command, params).then((result) => result.rows);
}

export { db, query };
