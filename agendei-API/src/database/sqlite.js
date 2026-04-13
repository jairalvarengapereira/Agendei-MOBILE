import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

// Corrigir __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SQLite3 = sqlite3.verbose();

// Caminho do banco de dados
const dbPath = process.env.DB_URL || path.join(__dirname, "banco.db");

const db = new SQLite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(`Erro ao conectar o banco de dados: ${err.message}`);
  }
});

// Facilitador de consultas SQL
function query(command, params, method = "all") {
  return new Promise((resolve, reject) => {
    db[method](command, params, function (err, result) {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

export { db, query };

// Arquivo Old
// import sqlite3 from 'sqlite3';

// const path = require('path');
// const SQLite3 = sqlite3.verbose();

// // Facilitador de consultas SQL
// function query(command, params, method = 'all'){
//   return new Promise((resolve, reject) => {
//     db[method](command, params, function (err, result) {
//       if (err)
//         reject(err);
//       else
//         resolve(result);
//     });
//   });
// }

// const dbPath = process.env.DB_URL || path.join(__dirname,'banco.db')

// const db = new SQLite3.Database("./src/database/banco.db", sqlite3.OPEN_READWRITE, (err) => {
//   if (err)
//     return console.error(`Erro ao conectar o banco de dados: ${err.message}`);
// });

// export {db, query};

// Preparação para Render
// ======================
// import sqlite3 from "sqlite3";
// import path from "path";
// import { fileURLToPath } from "url";

// // Corrigir __dirname para ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Definir caminho do banco (Render usa /var/data/)
// const dbPath = process.env.DB_URL || path.join("/var/data", "banco.db");

// const SQLite3 = sqlite3.verbose();

// // Inicializar banco de dados
// const db = new SQLite3.Database(
//   dbPath,
//   sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
//   (err) => {
//     if (err) {
//       console.error(`Erro ao conectar o banco de dados: ${err.message}`);
//     } else {
//       console.log("Banco de dados conectado com sucesso.");
//     }
//   }
// );

// // Facilitador de consultas SQL
// function query(command, params = [], method = "all") {
//   return new Promise((resolve, reject) => {
//     db[method](command, params, function (err, result) {
//       if (err) reject(err);
//       else resolve(result);
//     });
//   });
// }

// export { db, query };
