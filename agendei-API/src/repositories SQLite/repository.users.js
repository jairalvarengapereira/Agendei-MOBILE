import { query } from "../database/sqlite.js";

// Método Inserir (POST)
async function Inserir(name, email, hashedPassword){
  let sql = `insert into users (name, email, password) 
                        VALUES (?, ?, ?) returning id_user`;
  const user = await query(sql,[name, email, hashedPassword]);
  return user[0];
}

async function AddUser(name, email,fone, cep, logr, num, compl, bairro, cidade, uf){
  let sql = `insert into users (name, email, fone, cep, logr, num, compl, bairro, cidade, uf) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) returning id_user`;
  const user = await query(sql,[name, email, fone, cep, logr, num, compl, bairro, cidade, uf]);
  return user[0];
}

// Método Editar (PUT)
async function EditUser(name, email, fone, cep, logr, num, compl, bairro, cidade, uf, id_user){
  let sql = `UPDATE users SET name=?, email=?, fone=?, cep=?, logr=?, num=?, compl=?, bairro=?, cidade=?, uf=? WHERE id_user = ?`;
  await query(sql,[name, email, fone, cep, logr, num, compl, bairro, cidade, uf, id_user]);
}

// Método ListarByEmail
async function ListarByEmail(email){
  let sql = `Select * from users where email = ?`;
  const user = await query(sql, [email]);

  if (user.length == 0)
    return [];
  else
    return user[0];
}

// Método Listar Doctor (GET)
async function ListarUser(id_user) {
  let sql = "select * from users where id_user = ? ";
  const user = await query(sql, [id_user]);
  return user;
}

// Método InserirAdmin (POST)
async function InserirAdmin(name, email, hashedPassword){
  // alert(name, email)
  let sql = `insert into admins (name, email, password) VALUES (?, ?, ?) 
             returning id_admin`;
  const admin = await query(sql,[name, email, hashedPassword]);
  return admin[0];
}

// Método ListarByEmailAdmin
async function ListarByEmailAdmin(email){
  let sql = `Select * from admins where email = ?`;
  const admin = await query(sql, [email]);

  if (admin.length == 0)
    return [];
  else
    return admin[0];
}

// Método Profile
async function Profile(id_user){
  let sql = "select id_user, name, email from users where id_user = ? ";
  const user = await query(sql,[id_user]);
  return user[0];
}

// Método Listar Users
async function Listar(){

  let sql = "select id_user, name, email, fone, cep, logr, num, compl, bairro, cidade, uf from users order by name ";
  const users = await query(sql,[]);
  return users;
}

// Método Excluir (DELETE)
async function DelUser(id_user){
  let sql = "DELETE FROM users WHERE id_user = ?";
  await query(sql,[id_user]);
}

// Exportando os métodos
export default { AddUser, DelUser, Inserir, ListarByEmail, Profile, ListarByEmailAdmin, InserirAdmin, Listar, ListarUser, EditUser };