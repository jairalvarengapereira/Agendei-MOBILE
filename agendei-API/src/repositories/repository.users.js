import { query } from "../database/postgres.js";

// Método Inserir (POST)
async function Inserir(name, email, hashedPassword){
  let sql = `insert into users (name, email, password) 
                        VALUES ($1, $2, $3) returning id_user`;
  const user = await query(sql, [name, email, hashedPassword]);
  return user[0];
}

// Método AddUser (POST)
async function AddUser(
  name,
  email,
  password,
  fone,
  cep,
  logr,
  num,
  compl,
  bairro,
  cidade,
  uf
) {
  let sql = `insert into users (name, email, password, fone, cep, logr, num, compl, bairro, cidade, uf) 
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning id_user`;
  const user = await query(sql, [
    name,
    email,
    password,
    fone,
    cep,
    logr,
    num,
    compl,
    bairro,
    cidade,
    uf,
  ]);
  return user[0];
}

// Método Editar (PUT)
async function EditUser(name, fone, cep, logr, num, compl, bairro, cidade, uf, id_user){
  let sql = `UPDATE users SET name=$1, fone=$2, cep=$3, logr=$4, num=$5, compl=$6, bairro=$7, cidade=$8, uf=$9 WHERE id_user = $10`;
  await query(sql, [name, fone, cep, logr, num, compl, bairro, cidade, uf, id_user]);
  return { success: true, id_user };
}

// Método ListarByEmail
async function ListarByEmail(email){
  let sql = `Select * from users where email = $1`;
  const user = await query(sql, [email]);

  if (user.length == 0)
    return [];
  else
    return user[0];
}

// Método Listar User (GET)
async function ListarUser(id_user) {
  let sql = "select * from users where id_user = $1 ";
  const user = await query(sql, [id_user]);
  return user;
}

// Método InserirAdmin (POST)
async function InserirAdmin(name, email, hashedPassword){
  let sql = `insert into admins (name, email, password) VALUES ($1, $2, $3) 
             returning id_admin`;
  const admin = await query(sql, [name, email, hashedPassword]);
  return admin[0];
}

// Método ListarByEmailAdmin
async function ListarByEmailAdmin(email){
  let sql = `Select * from admins where email = $1`;
  const admin = await query(sql, [email]);

  if (admin.length == 0)
    return [];
  else
    return admin[0];
}

// Método Profile
async function Profile(id_user){
  let sql = "select id_user, name, email, fone, cep, logr, num, compl, bairro, cidade, uf from users where id_user = $1 ";
  const user = await query(sql, [id_user]);
  return user[0];
}

// Método Listar Users
async function Listar(){
  let sql = "select id_user, name, email, fone, cep, logr, num, compl, bairro, cidade, uf from users order by name ";
  const users = await query(sql, []);
  return users;
}

// Método Excluir (DELETE)
async function DelUser(id_user){
  let sql = "DELETE FROM users WHERE id_user = $1";
  await query(sql, [id_user]);
}

// Método Atualizar Senha
async function UpdatePassword(id_user, hashedPassword){
  let sql = "UPDATE users SET password = $1 WHERE id_user = $2";
  await query(sql, [hashedPassword, id_user]);
}

// Exportando os métodos
export default { AddUser, DelUser, Inserir, ListarByEmail, Profile, ListarByEmailAdmin, InserirAdmin, Listar, ListarUser, EditUser, UpdatePassword };
