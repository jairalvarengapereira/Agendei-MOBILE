import repositoryUsers from "../repositories/repository.users.js";
import bcrypt from "bcrypt"
import jwt from "../token.js"

// Método Inserir
async function Inserir(name, email, password){  
  // Aqui é gerado o hash para a criptografia da senha
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await repositoryUsers.Inserir(name, email, hashedPassword);
  user.token = jwt.CreateToken(user.id_user);
  return user; 
}

// Método AddUser
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
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await repositoryUsers.AddUser(
    name,
    email,
    hashedPassword,
    fone,
    cep,
    logr,
    num,
    compl,
    bairro,
    cidade,
    uf
  );
  user.token = jwt.CreateToken(user.id_user);
  return user;
}

// Método Editar User
async function EditUser(name, fone, cep, logr, num, compl, bairro, cidade, uf, id_user){
  const updatedUser = await repositoryUsers.EditUser(name, fone, cep, logr, num, compl, bairro, cidade, uf, id_user);
  return updatedUser; 
}

// Método Alterar Senha
async function ChangePassword(id_user, currentPassword, newPassword) {
  const user = await repositoryUsers.ListarUser(id_user);
  if (!user) {
    throw new Error("Usuário não encontrado");
  }
  
  const passwordMatch = await bcrypt.compare(currentPassword, user.password);
  if (!passwordMatch) {
    throw new Error("Senha atual incorreta");
  }
  
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await repositoryUsers.UpdatePassword(id_user, hashedPassword);
}

// Método Listar Users
async function Listar(){
  const users = await repositoryUsers.Listar();
  return users; 
}

// Método Listar User By ID
async function ListarUser(id_user){
  const user = await repositoryUsers.ListarUser(id_user);
  return user; 
}

// Método Login// Método Login
async function Login(email, password){
  const user = await repositoryUsers.ListarByEmail(email);
  
  // Se o email não existir, retorna array vazio
  if(!user || Array.isArray(user) && user.length == 0) 
    return [];
  
  // Se a senha conferir com o hash criptografado, retorna o usuário
  if (await bcrypt.compare(password, user.password)){
    delete user.password;
    user.token = jwt.CreateToken(user.id_user);
    return user;
  } else {
    return []; // Senha não confere
  }
}

// Método InserirAdmin
async function InserirAdmin(name, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const admin = await repositoryUsers.InserirAdmin(name, email, hashedPassword);
  admin.token = jwt.CreateToken(admin.id_admin); // ← id_admin, não id_user
  return admin;
}

// Método LoginAdmin
async function LoginAdmin(email, password){
  const admin = await repositoryUsers.ListarByEmailAdmin(email);
  // Se o email não existir, retorna null
  if(admin.length == 0) 
    return []
  else {
    // Se a senha conferir com o hash criptografado, retorna o usuário
    if (await bcrypt.compare(password, admin.password)){
      delete admin.password;

      admin.token = jwt.CreateToken(admin.id_user);

      return admin;
    }else
      return [];  // Senha não confere, retorna null
  }
  return admin; 
}

// Método EditarAdmin
async function EditarAdmin(name, email, hashedPassword, id_admin) {
  let sql;
  if (hashedPassword) {
    sql = `UPDATE admins SET name=$1, email=$2, password=$3 WHERE id_admin=$4`;
    await query(sql, [name, email, hashedPassword, id_admin]);
  } else {
    sql = `UPDATE admins SET name=$1, email=$2 WHERE id_admin=$3`;
    await query(sql, [name, email, id_admin]);
  }
}

// Método Profile
async function Profile(id_user){
  const user = await repositoryUsers.Profile(id_user);
  return user; 
}

// Método Excluir
async function DelUser(id_user){
  await repositoryUsers.DelUser(id_user);
}


// Exportando os Métodos
export default { AddUser, DelUser, Inserir, Login, Profile, LoginAdmin, InserirAdmin, Listar, ListarUser, EditUser, EditarAdmin, ChangePassword };

