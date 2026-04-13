import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import Appointments from "./pages/appointments/appointments.jsx";
import AppointmentAdd from "./pages/appointment-add/appointment-add.jsx";
import Doctors from "./pages/doctors/doctors.jsx";
import DoctorsAdd from "./pages/doctors-add/doctors-add.jsx";
import Users from "./pages/users/users.jsx";
import UsersAdd from "./pages/users-add/users-add.jsx";
import Profile from "./pages/profile/profile.jsx";
import Services from "./pages/services/services.jsx";
import ServicesAdd from "./pages/services-add/services-add.jsx";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointments/add" element={<AppointmentAdd />} />
        <Route path="/appointments/edit/:id_appointment" element={<AppointmentAdd />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/add" element={<DoctorsAdd />} />
        <Route path="/doctors/edit/:id_doctor" element={<DoctorsAdd />} />
        <Route path="/users/" element={<Users />} />
        <Route path="/users/add" element={<UsersAdd />} />
        <Route path="/users/edit/:id_user" element={<UsersAdd />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/add" element={<ServicesAdd />} />
        <Route path="/services/edit/:id_service" element={<ServicesAdd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;