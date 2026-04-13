import repositoryAppointment from "../repositories/repository.appointment.js";

// Método Listar
async function Listar(id_user, dt_start, dt_end, id_doctor){
  const appointments = await repositoryAppointment.Listar(id_user, dt_start, dt_end, id_doctor);
  return appointments; 
}

// Listar médicos com agendamentos
async function ListarDoctorsWithAppointments(){
  return await repositoryAppointment.ListarDoctorsWithAppointments();
}

// Método Inserir
async function Inserir(id_user, id_doctor, id_service, booking_date, booking_hour){
  
  const newAppointment = await repositoryAppointment.Inserir(id_user, id_doctor, id_service, booking_date, booking_hour);
  
  return newAppointment; 
}

// Método Excluir
async function Excluir(id_user, id_appointment){

  const delAppointments = await repositoryAppointment.Excluir(id_user, id_appointment);
  return delAppointments; 
}

// Método ListarId
async function ListarId(id_appointment){
  const appointments = await repositoryAppointment.ListarId(id_appointment);
  return appointments; 
}

// Método Editar
async function Editar(id_appointment, id_user, id_doctor, id_service, booking_date, booking_hour){
  
  const Appointment = await repositoryAppointment.Editar(id_appointment, id_user, id_doctor, id_service, booking_date, booking_hour);
  
  return Appointment; 
}

// Exportando os Métodos
export default {Listar, Inserir, Excluir, ListarId, Editar, ListarDoctorsWithAppointments}

