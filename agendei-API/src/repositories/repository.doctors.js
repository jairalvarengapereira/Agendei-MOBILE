import { query } from "../database/postgres.js";

async function Listar(name) {
  let filtro = [];
  let sql = `SELECT id_doctor, name, icon, specialty FROM doctors`;
  if (name) {
    sql += " WHERE name ilike $1 ";
    filtro.push(`%${name}%`);
  }
  sql += " ORDER BY name";
  return await query(sql, filtro);
}

async function ListarDoctor(id_doctor) {
  let sql = `SELECT id_doctor, name, icon, specialty FROM doctors WHERE id_doctor = $1`;
  return await query(sql, [id_doctor]);
}

async function Inserir(name, specialty, icon, services) {
  const newDoctor = await query(
    `INSERT INTO doctors (name, specialty, icon) VALUES ($1, $2, $3) RETURNING id_doctor`,
    [name, specialty, icon]
  );
  const id_doctor = newDoctor[0].id_doctor;

  if (services && services.length > 0) {
    for (const s of services) {
      await query(
        `INSERT INTO doctors_services (id_doctor, id_service, price) VALUES ($1, $2, $3)`,
        [id_doctor, s.id_service, s.price]
      );
    }
  }
  return newDoctor[0];
}

async function Editar(id_doctor, name, specialty, icon, services) {
  await query(
    "UPDATE doctors SET name = $1, specialty = $2, icon = $3 WHERE id_doctor = $4",
    [name, specialty, icon, id_doctor]
  );

  if (services && services.length > 0) {
    await query("DELETE FROM doctors_services WHERE id_doctor = $1", [
      id_doctor,
    ]);
    for (const s of services) {
      await query(
        `INSERT INTO doctors_services (id_doctor, id_service, price) VALUES ($1, $2, $3)`,
        [id_doctor, s.id_service, s.price]
      );
    }
  }
}

async function Excluir(id_doctor) {
  await query("DELETE FROM doctors WHERE id_doctor = $1", [id_doctor]);
}

async function ListarServicos(id_doctor) {
  let sql = `SELECT d.id_service, s.description, d.price
             FROM doctors_services d 
             JOIN services s ON d.id_service = s.id_service
             WHERE d.id_doctor = $1
             ORDER BY s.description`;
  return await query(sql, [id_doctor]);
}

export default {
  Listar,
  Inserir,
  Editar,
  Excluir,
  ListarServicos,
  ListarDoctor,
};
