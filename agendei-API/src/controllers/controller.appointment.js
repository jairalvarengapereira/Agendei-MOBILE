import serviceAppointment from '../services/service.appointment.js'

// Médoto Listar por usuários logado (App)
async function ListarByUser(req, res){
  const id_user = req.id_user;
  const appointments = await serviceAppointment.Listar(id_user, "", "", "");
  res.status(200).json(appointments);
}

// Médoto Listar Geral (Admin)
async function Listar(req, res){

  const dt_start = req.query.dt_start;
  const dt_end = req.query.dt_end;
  const id_doctor = req.query.id_doctor;
  
  const appointments = await serviceAppointment.Listar(0, dt_start, dt_end, id_doctor);
  res.status(200).json(appointments);
}

// Listar médicos com agendamentos (para filtro)
async function ListarDoctorsWithAppointments(req, res){
  const doctors = await serviceAppointment.ListarDoctorsWithAppointments();
  res.status(200).json(doctors);
}

// Médoto Inserir
async function Inserir(req, res){
  const id_user = req.id_user;
  const {id_doctor, id_service, booking_date, booking_hour} = req.body;
  
  const newAppointment = await serviceAppointment.Inserir(id_user, id_doctor, id_service, booking_date, booking_hour);
  res.status(200).json(newAppointment);
}

// Médoto Excluir
async function Excluir(req, res){
  const id_user = req.id_user;
  const id_appointment = req.params.id_appointment;
  
  const delAppointment = await serviceAppointment.Excluir(id_user, id_appointment);
  res.status(200).json(delAppointment);
}

// Médoto Listar Users
async function ListarId(req, res){

  const id_appointment = req.params.id_appointment;  
  const appointments = await serviceAppointment.ListarId(id_appointment);
  res.status(200).json(appointments);
}

// Médoto Inserir Admin
async function InserirAdmin(req, res){
  const {id_user, id_doctor, id_service, booking_date, booking_hour} = req.body;
  
  const newAppointment = await serviceAppointment.Inserir(id_user, id_doctor, id_service, booking_date, booking_hour);
  res.status(200).json(newAppointment);
}

// Médoto Editar Admin
async function EditarAdmin(req, res){

  const id_appointment = req.params.id_appointment;

  const { id_user, id_doctor, id_service, booking_date, booking_hour } = req.body;
  
  const Appointment = await serviceAppointment.Editar(id_appointment, id_user, id_doctor, id_service, booking_date, booking_hour);

  res.status(200).json(Appointment);
}

export default {ListarByUser, Listar, Inserir, Excluir, ListarId, InserirAdmin, EditarAdmin, ListarDoctorsWithAppointments }