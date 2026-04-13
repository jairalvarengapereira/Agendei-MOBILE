import { query } from "../database/sqlite.js";

// Método Listar (GET)
async function Listar(name){
  // Filtro de pesquisa por nome
  let filtro = []
  let sql = "select * from doctors ";
  if(name){
    sql += "where name like ? ";
    filtro.push(`%${name}%`);
  }
  sql += "order by name";

  const doctors = await query(sql,filtro);
  return doctors;
}

// Método Listar Doctor (GET)
async function ListarDoctor(id_doctor) {
  let sql = "select * from doctors where id_doctor = ? ";
  const doctor = await query(sql, [id_doctor]);
  return doctor;
}

// Método Inserir (POST)
async function Inserir(name, specialty, icon){
  // let sqlService = "SELECT description FROM services WHERE id_service = ?";
  // const specialtyResult = await query(sqlService, [id_service]); // Retorna um array
  
  // if (specialtyResult.length === 0) {
  //   throw new Error("Serviço não encontrado.");
  // }

  // const specialty = specialtyResult[0].description; // Pegando apenas o nome da especialidade

  let sql = `INSERT INTO doctors (name, specialty, icon) VALUES (?, ?, ?) RETURNING id_doctor`;
  const newDoctor = await query(sql, [name, specialty, icon]);
  // const newDoctor = await query(sql, [name, id_service, icon]);

  return newDoctor[0];
}

// Método Editar (PUT)
async function Editar(id_doctor, name, specialty, icon){
  let sql = "UPDATE doctors SET name = ?, specialty = ?, icon = ? WHERE id_doctor = ?";
  await query(sql,[name, specialty, icon, id_doctor]);
}

// Método Excluir (DELETE)
async function Excluir(id_doctor){
  let sql = "DELETE FROM doctors WHERE id_doctor = ?";
  await query(sql,[id_doctor]);
}

// Método ListarServicos
async function ListarServicos(id_doctor){
  let sql = `Select d.id_service, s.description, d.price
               From doctors_services d join services s on d.id_service = s.id_service
              Where d.id_doctor =?
              Order by s.description`;

  const serv = await query(sql,id_doctor);
  return serv;
};

// Exportando os métodos
export default {Listar, Inserir, Editar, Excluir, ListarServicos, ListarDoctor};