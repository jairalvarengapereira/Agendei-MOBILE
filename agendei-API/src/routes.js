import { Router } from "express";
import controllerServices from "./controllers/controller.services.js";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";
import controllerAppointment from "./controllers/controller.appointment.js";
import jwt from "./token.js";

const router = Router();

// Doctors
router.get("/doctors", jwt.ValidateToken, controllerDoctor.Listar);
router.get(
  "/doctors/:id_doctor",
  jwt.ValidateToken,
  controllerDoctor.ListarDoctor
);
router.post("/doctors", jwt.ValidateToken, controllerDoctor.Inserir);
router.put("/doctors/:id_doctor", jwt.ValidateToken, controllerDoctor.Editar);
router.delete(
  "/doctors/:id_doctor",
  jwt.ValidateToken,
  controllerDoctor.Excluir
);
router.get("/doctors/:id_doctor/services", controllerDoctor.ListarServicos);

// Users
router.post("/users", controllerUser.AddUser);
router.post("/users/login", controllerUser.Login);
router.delete("/users/:id_user", jwt.ValidateToken, controllerUser.DelUser);
router.get("/users/profile", jwt.ValidateToken, controllerUser.Profile);
router.get("/users/:id_user", jwt.ValidateToken, controllerUser.ListarUser);
router.put("/users/:id_user", jwt.ValidateToken, controllerUser.EditUser);
router.put("/users/:id_user/password", jwt.ValidateToken, controllerUser.ChangePassword);

// Services
router.get("/services", controllerServices.Listar);
router.get("/services/:id_service/doctors", controllerServices.ListarDoctorsByService);
router.post("/services", jwt.ValidateToken, controllerServices.Inserir);
router.put(
  "/services/:id_service",
  jwt.ValidateToken,
  controllerServices.Editar
);
router.delete(
  "/services/:id_service",
  jwt.ValidateToken,
  controllerServices.Excluir
);

// Appointments
router.get(
  "/appointments",
  jwt.ValidateToken,
  controllerAppointment.ListarByUser
);
router.post("/appointments", jwt.ValidateToken, controllerAppointment.Inserir);
router.delete(
  "/appointments/:id_appointment",
  jwt.ValidateToken,
  controllerAppointment.Excluir
);

// Admin
router.post("/admin/register", controllerUser.InserirAdmin);
router.post("/admin/login", controllerUser.LoginAdmin);
router.get(
  "/admin/appointments",
  jwt.ValidateToken,
  controllerAppointment.Listar
);
router.get(
  "/admin/appointments/doctors",
  jwt.ValidateToken,
  controllerAppointment.ListarDoctorsWithAppointments
);
router.get("/admin/users", jwt.ValidateToken, controllerUser.Listar);
router.get(
  "/admin/appointments/:id_appointment",
  jwt.ValidateToken,
  controllerAppointment.ListarId
);
router.post(
  "/admin/appointments",
  jwt.ValidateToken,
  controllerAppointment.InserirAdmin
);
router.put(
  "/admin/appointments/:id_appointment",
  jwt.ValidateToken,
  controllerAppointment.EditarAdmin
);
router.put(
  "/admin/profile/:id_admin",
  jwt.ValidateToken,
  controllerUser.EditarAdmin
);

export default router;
