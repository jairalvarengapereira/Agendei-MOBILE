import "./appointments.css"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css'
import Navbar from "../../components/navbar/navbar.jsx";
import api from "../../constantes/api.js";
import Appointment from "../../components/appointment/appointment.jsx";

function Appointments(){

  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [doctors,setDoctors] = useState([]);
  const [idDoctor,setIdDoctor] = useState("");
  const [dtStart,setDtStart] = useState("");
  const [dtEnd,setDtEnd] = useState("");
  
  function clickEdit(id_appointment){
    navigate("/appointments/edit/" + id_appointment)
  }

  function clickDelete(id_appointment) {
    confirmAlert({
      title: "Exclusão",
      message: `Deseja mesmo excluir o agendamento? `,
      buttons: [
        {
          label: "Sim",
          onClick: () => DeleteAppointments(id_appointment) //deleteAppointment(id_appointment)
        },
        {
          label: "Não",
          onClick: () => {}
        }
      ]
    })
  }

  async function LoadDoctors(){
    try {
      const response = await api.get('/admin/appointments/doctors');
      
      if(response.data){
        setDoctors(response.data);
      }      
    } catch (error) {
      if(error.response?.data.error){
        if(error.response.status == 401)
          navigate("/"); 
      }else{
        alert("Erro ao listar médicos.");
      }
    }
  }

  async function DeleteAppointments(id){
    try {
      const response = await api.delete('/appointments/' + id);
      
      if(response.data){
        LoadAppointments();
      }      
    } catch (error) {
      if(error.response?.data.error){
        if(error.response.status == 401)
          navigate("/"); 
      }else{
        alert("Erro ao excluir dados.");
      }
    }
  }

  async function LoadAppointments(){
    try {
      const params = {
        id_doctor: idDoctor !== 0 ? idDoctor : undefined,
        dt_start: dtStart,
        dt_end: dtEnd
      };
      // const params = idDoctor !== 0 ? { id_doctor: idDoctor } : {}; // 99Coders
  
      const response = await api.get('/admin/appointments', { params });
      
      if(response.data){
        setAppointments(response.data);
      }      
    } catch (error) {
      if(error.response?.data.error){

        if(error.response.status == 401)
          navigate("/"); 

      }else{
        alert("Erro ao efetuar login. Tente mais tarde.");
      }
    }
  }
  
  function changeDoctor(e) {
    setIdDoctor(e.target.value);
    LoadAppointments();
  }

  useEffect(() => {
    LoadAppointments();
    LoadDoctors(); 
  }, [idDoctor]);

  return <div className="container-fluid mt-page">
    <Navbar />

    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex flex-column">
        <h2 className="mb-3">Agendamentos</h2>
        <Link to="/appointments/add" className="btn btn-primary mt-2">
          <i className="bi bi-plus-lg me-2"></i>
          Novo Agendamento
        </Link>
      </div>

      <div className="filter-row">

        <input 
          id="startDate" 
          type="date" 
          onChange={(e) => setDtStart(e.target.value)}
        />
        <span className="date-separator">até</span>
        <input 
          id="endtDate" 
          type="date" 
          onChange={(e) => setDtEnd(e.target.value)} 
        />

        <select 
          name="doctor" 
          id="doctor" 
          value={idDoctor}
          onChange={changeDoctor}          
        >
          <option value="">Todos os médicos</option>
          {
            doctors.map((doc) => (
              <option key={doc.id_doctor} value={doc.id_doctor}>
                {doc.name}
              </option>
            ))
          }
        </select>

        <button onClick={LoadAppointments} className="filter-btn" type="submit">
          <i className="bi bi-funnel me-1"></i>
          Filtrar
        </button>
      </div>

    </div>

    <div className="card p-0">
      <table class="table table-hover mb-0">
        <thead className="bold">
          <tr>
            <th scope="col">Paciente</th>
            <th scope="col">Médico</th>
            <th scope="col">Serviço</th>
            <th scope="col">Data/Hora</th>
            <th scope="col" className="text-end">Valor</th>
            <th scope="col" className="col-buttons"></th>
          </tr>
        </thead>

        <tbody>
          {
            appointments.map((ap) => {
              return <Appointment 
                key={ap.id_appointment}
                id_appointment={ap.id_appointment}
                user={ap.user}
                doctor={ap.doctor}
                service={ap.service}
                booking_date={ap.booking_date}
                booking_hour={ap.booking_hour}
                price={ap.price}
                clickEdit={clickEdit}
                clickDelete={clickDelete}
              />
            })
          }
        </tbody>

      </table>
    </div>
  </div>
}

export default Appointments;