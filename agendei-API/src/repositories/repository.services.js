import { query } from "../database/postgres.js";

async function Listar() {
  let sql = "SELECT id_service, description FROM services ORDER BY description";
  const services = await query(sql, []);
  return services;
}

async function ListarDoctorsByService(id_service) {
  let sql = `SELECT d.id_doctor, d.name, d.specialty, d.icon
             FROM doctors d
             JOIN doctors_services ds ON d.id_doctor = ds.id_doctor
             WHERE ds.id_service = $1
             ORDER BY d.name`;
  const doctors = await query(sql, [id_service]);
  return doctors;
}

async function Inserir(description) {
  let sql = `INSERT INTO services (description) VALUES ($1) RETURNING id_service`;
  const service = await query(sql, [description]);
  return service[0];
}

async function Editar(id_service, description) {
  let sql = "UPDATE services SET description = $1 WHERE id_service = $2";
  await query(sql, [description, id_service]);
}

async function Excluir(id_service) {
  let sql = "DELETE FROM services WHERE id_service = $1";
  await query(sql, [id_service]);
}

export default { Listar, ListarDoctorsByService, Inserir, Editar, Excluir };
