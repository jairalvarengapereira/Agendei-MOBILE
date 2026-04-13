import { query } from "../database/sqlite.js";

// Método Listar (GET)
async function Listar() {
  // Consulta SQL para buscar todos os serviços
  let sql = "SELECT id_service, description FROM services ORDER BY description";
  try {
    const services = await query(sql, []);
    return services;
  } catch (error) {
    console.error("Erro ao listar serviços:", error);
    throw error;
  }
}
// // Método Inserir (POST)
// async function Inserir(name, specialty, icon){
//   let sql = `insert into doctors (name, specialty, icon) VALUES (?, ?, ?) returning id_doctor`;
//   const newDoctor = await query(sql,[name, specialty, icon]);
//   return newDoctor[0];
// }

// // Método Editar (PUT)
// async function Editar(id_doctor, name, specialty, icon){
//   let sql = "UPDATE doctors SET name = ?, specialty = ?, icon = ? WHERE id_doctor = ?";
//   await query(sql,[name, specialty, icon, id_doctor]);
// }

// // Método Excluir (DELETE)
// async function Excluir(id_doctor){
//   let sql = "DELETE FROM doctors WHERE id_doctor = ?";
//   await query(sql,[id_doctor]);
// }

// // Método ListarServicos
// async function ListarServicos(id_doctor){
//   let sql = `Select d.id_service, s.description, d.price
//                From doctors_services d join services s on d.id_service = s.id_service
//               Where d.id_doctor =?
//               Order by s.description`;

//   const serv = await query(sql,id_doctor);
//   return serv;
// };

// Exportando os métodos
export default {Listar}//, Inserir, Editar, Excluir, ListarServicos};