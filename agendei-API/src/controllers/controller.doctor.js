import serviceDoctor from "../services/service.doctor.js";

async function Listar(req, res) {
  const name = req.query.name;
  const doctors = await serviceDoctor.Listar(name);
  res.status(200).json(doctors);
}

async function ListarDoctor(req, res) {
  const id_doctor = req.params.id_doctor;
  const doctor = await serviceDoctor.ListarDoctor(id_doctor);
  res.status(200).json(doctor);
}

async function Inserir(req, res) {
  try {
    const { name, specialty, icon, services } = req.body;
    const newDoctor = await serviceDoctor.Inserir(
      name,
      specialty,
      icon,
      services
    );
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function Editar(req, res) {
  try {
    const id_doctor = req.params.id_doctor;
    const { name, specialty, icon, services } = req.body;
    await serviceDoctor.Editar(id_doctor, name, specialty, icon, services);
    res.status(200).json({ message: "Médico atualizado com sucesso." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function Excluir(req, res) {
  try {
    const id_doctor = req.params.id_doctor;
    await serviceDoctor.Excluir(id_doctor);
    res.status(204).send();
  } catch (error) {
    if (
      error.message.includes("foreign key") ||
      error.message.includes("still referenced") ||
      error.message.includes("appointments") ||
      error.message.includes("doctors_services")
    ) {
      res
        .status(409)
        .json({ error: "Médico possui serviços ou consultas vinculadas." });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
}

async function ListarServicos(req, res) {
  const id_doctor = req.params.id_doctor;
  const serv = await serviceDoctor.ListarServicos(id_doctor);
  res.status(200).json(serv);
}

export default {
  Listar,
  Inserir,
  Editar,
  Excluir,
  ListarServicos,
  ListarDoctor,
};
