import repositoryDoctors from "../repositories/repository.doctors.js";

async function Listar(name) {
  return await repositoryDoctors.Listar(name);
}

async function ListarDoctor(id_doctor) {
  return await repositoryDoctors.ListarDoctor(id_doctor);
}

async function Inserir(name, specialty, icon, services) {
  return await repositoryDoctors.Inserir(name, specialty, icon, services);
}

async function Editar(id_doctor, name, specialty, icon, services) {
  return await repositoryDoctors.Editar(
    id_doctor,
    name,
    specialty,
    icon,
    services
  );
}

async function Excluir(id_doctor) {
  await repositoryDoctors.Excluir(id_doctor);
}

async function ListarServicos(id_doctor) {
  return await repositoryDoctors.ListarServicos(id_doctor);
}

export default {
  Listar,
  Inserir,
  Editar,
  Excluir,
  ListarServicos,
  ListarDoctor,
};
