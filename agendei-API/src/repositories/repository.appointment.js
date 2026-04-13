import { query } from "../database/postgres.js";

// Método Listar
async function Listar(id_user, dt_start, dt_end, id_doctor) {
  let sql = `
    SELECT a.*, u.name as user, d.name as doctor, s.description as service
    FROM appointments a
    JOIN users u ON a.id_user = u.id_user
    JOIN doctors d ON a.id_doctor = d.id_doctor
    JOIN services s ON a.id_service = s.id_service
    WHERE 1=1
  `;
  let params = [];

  if (id_user > 0) {
    sql += ` AND a.id_user = $${params.length + 1}`;
    params.push(id_user);
  }
  if (id_doctor) {
    sql += ` AND a.id_doctor = $${params.length + 1}`;
    params.push(id_doctor);
  }
  if (dt_start) {
    sql += ` AND a.booking_date >= $${params.length + 1}`;
    params.push(dt_start);
  }
  if (dt_end) {
    sql += ` AND a.booking_date <= $${params.length + 1}`;
    params.push(dt_end);
  }

  sql += ` ORDER BY a.booking_date DESC, a.booking_hour DESC`;

  const appointments = await query(sql, params);
  return appointments;
}

// Listar médicos que têm agendamentos
async function ListarDoctorsWithAppointments() {
  let sql = `
    SELECT DISTINCT d.id_doctor, d.name, d.specialty
    FROM doctors d
    JOIN appointments a ON d.id_doctor = a.id_doctor
    ORDER BY d.name
  `;
  return await query(sql, []);
}

// Método Inserir (POST)
async function Inserir(id_user, id_doctor, id_service, booking_date, booking_hour){
  let sql = `insert into appointments (id_user, id_doctor, id_service, booking_date, booking_hour) 
                             VALUES ($1, $2, $3, $4, $5) returning id_appointment`;
  const newAppointment = await query(sql, [id_user, id_doctor, id_service, booking_date, booking_hour]);
  return newAppointment[0];
}

// Método Excluir (DELETE)
async function Excluir(id_user, id_appointment){
  let sql = `Delete from appointments where id_appointment = $1`;
  await query(sql, [id_appointment]);
  return { id_appointment };
}

// Método Listar Agendamento por ID (GET)
async function ListarId(id_appointment){
  let sql = ` Select a.id_appointment, d.name as doctor, d.specialty, s.description as service, a.id_user,
                    u.name as user, a.booking_date, a.booking_hour, ds.price, a.id_doctor, a.id_service
              from appointments a join doctors  d on d.id_doctor  = a.id_doctor
                                  join users    u on u.id_user    = a.id_user
                                  join services s on s.id_service = a.id_service
                            left join doctors_services ds on ds.id_doctor  = a.id_doctor 
                                                        and ds.id_service = a.id_service
              where a.id_appointment = $1 `;

  const appointments = await query(sql, [id_appointment]);
  return appointments[0];
}

// Método Editar (PUT)
async function Editar(id_appointment, id_user, id_doctor, id_service, booking_date, booking_hour){
  let sql = ` update appointments set id_user = $1, 
                                  id_doctor = $2, 
                                  id_service = $3, 
                                  booking_date = $4, 
                                  booking_hour = $5
              where id_appointment = $6`;
  await query(sql, [id_user, id_doctor, id_service, booking_date, booking_hour, id_appointment]);
  return { id_appointment };
}

// Exportando os métodos
export default { Listar, ListarDoctorsWithAppointments, Inserir, Excluir, ListarId, Editar };