import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/navbar/navbar.jsx";
import api from "../../constantes/api.js";

function AppointmentAdd(){

  const navigate = useNavigate();
  const {id_appointment} = useParams();

  // Variáveis de estado
  const [users, setUsers] = useState([])
  const [doctors, setDoctors] = useState([])
  const [allServices, setAllServices] = useState([])

  // Variáveis que estão atreladas a seus respectivos destinos
  const [idUser, setIdUser] = useState("")
  const [idDoctor, setIdDoctor] = useState("")
  const [idService, setIdService] = useState("")
  const [bookingDate, setBookingDate] = useState("")
  const [bookingHour, setBookingHour] = useState("")
  
  async function loadAppointment(id){
    try{
      const response = await api.get(`/admin/appointments/${id}`);
      if (response.data) {
        setIdUser(response.data.id_user);
        setIdDoctor(response.data.id_doctor);
        setIdService(response.data.specialty);
        setBookingDate(response.data.booking_date);
        setBookingHour(response.data.booking_hour);
      }
    } catch (error) {
      if(error.response?.data.error){
        if (error.response.status == 401)
          return navigate('/');
        alert(error.response.data.error);
      } else {
      alert("Erro ao listar serviços");
      }
    }
  }
  
  async function loadUsers(){
    try{
      const response = await api.get("/admin/users");
      if (response.data) {
        setUsers(response.data);
      }
    } catch (error) {
      if(error.response?.data.error){
        if (error.response.status == 401)
          return navigate('/');
        alert(error.response.data.error);
      } else {
        alert("Erro ao listar pacientes");
      }
    }
  }

  async function loadAllServices(){
    try{
      const response = await api.get("/services");
      if (response.data) {
        setAllServices(response.data);
        
        // modo de alteração
        if(id_appointment){
          loadAppointment(id_appointment)
        }
      }
    } catch (error) {
      if(error.response?.data.error){
        if (error.response.status == 401)
          return navigate('/');
        alert(error.response.data.error);
      } else {
        alert("Erro ao listar serviços");
      }
    }
  }

  async function loadDoctorsByService(id_service){
    if(!id_service){
      setDoctors([]);
      setIdDoctor("");
      return;
    }

    try{
      const response = await api.get(`/services/${id_service}/doctors`);
      if (response.data) {
        setDoctors(response.data);
      }
    } catch (error) {
      if(error.response?.data.error){
        if (error.response.status == 401)
          return navigate('/');
        alert(error.response.data.error);
      } else {
      alert("Erro ao listar médicos");
      }
    }
  }

  async function SaveAppointment(){
    const json ={ id_user: idUser,
                  id_doctor: idDoctor,
                  id_service: idService,
                  booking_date: bookingDate,
                  booking_hour: bookingHour
    };

    try{
      const response =  id_appointment > 0 
                        ? await api.post("/admin/appointments/" + id_appointment, json) 
                        : await api.post("/admin/appointments", json); 

      if (response.data) {
        navigate("/appointments");
      }

    } catch (error) {
      if(error.response?.data.error){
        if (error.response.status == 401)
          return navigate('/');
        alert(error.response.data.error);
      } else {
      alert("Erro ao salvar agendamento.");
      }
    }
  }

  function handleServiceChange(e){
    const serviceId = e.target.value;
    setIdService(serviceId);
    setIdDoctor("");
    loadDoctorsByService(serviceId);
  }

  useEffect(()=>{
    loadUsers();
    loadAllServices();
  },[])

  return<>
    <Navbar />

    <div className="container-fluid mt-page">
      <div className="row col-lg-4 offset-lg-4">

        <div className="col-12 mt-2">
          <h2>{
            id_appointment > 0 ?"Editar Agendamento"  : "Novo Agendamento"
          }</h2>
        </div>

        {/* Pacientes */}
        <div className="col-12 mt-4">
          <label htmlFor="user" className="form-label">Paciente</label>
          <select 
            name="user" 
            id="user" 
            className="form-select"
            value={idUser}
            onChange={(e) => setIdUser(e.target.value)}           
          >
            <option value="">Selecione o paciente</option>{
              users.map((u) => (
                <option key={u.id_user} value={u.id_user}>
                  {u.name}
                </option>
              ))
            }
          </select>
        </div>

        {/* Especialidade/Serviço */}
        <div className="col-12 mt-4">
          <label htmlFor="service" className="form-label">Especialidade</label>
          <select 
            name="service" 
            id="service" 
            className="form-select"
            value={idService}
            onChange={handleServiceChange}  
          >
            <option value="">Selecione a especialidade</option>{
              allServices.map((s) => (
                <option key={s.id_service} value={s.id_service}>
                  {s.description}
                </option>
              ))
            }
          </select>
        </div>

        {/* Médicos */}
        <div className="col-12 mt-3">
          <label htmlFor="doctor" className="form-label">Médico</label>
          <select 
            name="doctor" 
            id="doctor" 
            className="form-select"
            value={idDoctor}
            onChange={(e) => setIdDoctor(e.target.value)}
            disabled={!idService}
          >
            <option value="">{idService ? "Selecione o médico" : "Selecione uma especialidade primeiro"}</option>{
              doctors.map((doc) => (
                <option key={doc.id_doctor} value={doc.id_doctor}>
                  {doc.name}
                </option>
              ))
            }
          </select>
        </div>

        {/* Data */}        
        <div className="col-6 mt-3">
          <label htmlFor="bookingDate" className="form-label">Data</label>
          <input 
            type="date" 
            id="bookingDate" 
            name="bookingDate" 
            className="form-control"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}   
          />
        </div>

        {/* Hora */}
        <div className="col-6 mt-3">
          <label htmlFor="bookingHour" className="form-label">Horário</label>
          <select 
            name="bookingHour" 
            id="bookingHour" 
            className="form-select"
            value={bookingHour}
            onChange={(e) => setBookingHour(e.target.value)}  
          >
            <option value="">Horário</option>
            <option value="08:00">08:00</option>
            <option value="08:30">08:30</option>
            <option value="09:00">09:00</option>
            <option value="09:30">09:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>
          </select>
        </div>

        <div className="col-12 mt-4">
          <div className="d-flex justify-content-end gap-3">
            <Link to="/appointments" className="btn btn-outline-primary">
              Cancelar
            </Link>
            <button onClick={SaveAppointment} type="button" className="btn btn-primary">
              Salvar Dados
            </button>

          </div>
        </div>


      </div>

    </div>
    
  </>
}

export default AppointmentAdd;