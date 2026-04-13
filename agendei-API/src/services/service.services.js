import repositoryServices from "../repositories/repository.services.js";

async function Listar() {
  return await repositoryServices.Listar();
}

async function ListarDoctorsByService(id_service) {
  return await repositoryServices.ListarDoctorsByService(id_service);
}

async function Inserir(description) {
  return await repositoryServices.Inserir(description);
}

async function Editar(id_service, description) {
  await repositoryServices.Editar(id_service, description);
}

async function Excluir(id_service) {
  await repositoryServices.Excluir(id_service);
}

export default { Listar, ListarDoctorsByService, Inserir, Editar, Excluir };
