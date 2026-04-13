import serviceUser from "../services/service.user.js";

// Método Inserir
async function AddUser(req, res) {
  const {
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
  } = req.body;
  const user = await serviceUser.AddUser(
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
  );
  res.status(201).json(user);
}

// Método Listar Users By ID
async function ListarUser(req, res){
  const id_user = req.params.id_user;
  const user = await serviceUser.ListarUser(id_user);
  res.status(200).json(user);
}

// Metodo Editar User
async function EditUser(req, res){
  try {
    const id_user = req.params.id_user;
    const {name, fone, cep, logr, num, compl, bairro, cidade, uf} = req.body;
    
    console.log("EditUser recebido:", {name, fone, cep, logr, num, compl, bairro, cidade, uf, id_user});
    
    const updatedUser = await serviceUser.EditUser(name, fone, cep, logr, num, compl, bairro, cidade, uf, id_user);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Erro no EditUser:", error);
    res.status(500).json({ error: error.message });
  }
}

// Método Alterar Senha
async function ChangePassword(req, res){
  try {
    const id_user = req.params.id_user;
    const { currentPassword, newPassword } = req.body;
    await serviceUser.ChangePassword(id_user, currentPassword, newPassword);
    res.status(200).json({ message: "Senha alterada com sucesso!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Método Login
async function Login(req, res){
  const {email, password } = req.body;
  const user = await serviceUser.Login(email, password);

  if (user == 0)
    res.status(401).json({ error: "E-mail ou senha inválida" });
  else
    res.status(201).json(user);
}

// Método InserirAdmin
// async function InserirAdmin(req, res){
//   const {name, email, password } = req.body;
//   const admin = await serviceUser.InserirAdmin(name, email, password);
//   res.status(201).json(admin);
// }
async function InserirAdmin(req, res) {
  try {
    const { name, email, password } = req.body;
    const admin = await serviceUser.InserirAdmin(name, email, password);
    res.status(201).json(admin);
  } catch (error) {
    console.error("Erro no InserirAdmin:", error.message);
    res.status(500).json({ error: error.message });
  }
}

// Método Logindmin
async function LoginAdmin(req, res){
  const {email, password } = req.body;
  const admin = await serviceUser.LoginAdmin(email, password);

  if (admin == 0)
    res.status(401).json({ error: "E-mail ou senha inválida" });
  else
    res.status(201).json(admin);
}

// Método Editar Admin
async function EditarAdmin(req, res) {
  try {
    const id_admin = req.params.id_admin;
    const { name, email, password } = req.body;
    const admin = await serviceUser.EditarAdmin(
      name,
      email,
      password,
      id_admin
    );
    res.status(200).json(admin);
  } catch (error) {
    console.error("Erro no EditarAdmin:", error.message);
    res.status(500).json({ error: error.message });
  }
}

// Método Listar Users
async function Profile(req, res){
  const id_user = req.id_user;
  const users = await serviceUser.Profile(id_user);
  res.status(200).json(users);
}

// Método Listar Users
async function Listar(req, res){
  const users = await serviceUser.Listar();
  res.status(200).json(users);
}

// Método Excluir
async function DelUser(req, res){
  const id_user = req.params.id_user;
  await serviceUser.DelUser(id_user);
  res.status(204).send();
}

// Métodos relacionados ao nome do médico
export default { AddUser, DelUser, Login, Profile, InserirAdmin, LoginAdmin, Listar, ListarUser, EditUser, EditarAdmin, ChangePassword };