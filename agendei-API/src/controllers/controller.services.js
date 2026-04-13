import serviceServices from "../services/service.services.js";

async function Listar(req, res) {
  try {
    const services = await serviceServices.Listar();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function ListarDoctorsByService(req, res) {
  try {
    const id_service = req.params.id_service;
    const doctors = await serviceServices.ListarDoctorsByService(id_service);
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function Inserir(req, res) {
  try {
    const { description } = req.body;
    if (!description)
      return res.status(400).json({ error: "Descrição é obrigatória." });
    const service = await serviceServices.Inserir(description);
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function Editar(req, res) {
  try {
    const id_service = req.params.id_service;
    const { description } = req.body;
    if (!description)
      return res.status(400).json({ error: "Descrição é obrigatória." });
    await serviceServices.Editar(id_service, description);
    res.status(200).json({ message: "Serviço atualizado com sucesso." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function Excluir(req, res) {
  try {
    const id_service = req.params.id_service;
    await serviceServices.Excluir(id_service);
    res.status(204).send();
  } catch (error) {
    if (
      error.message.includes("foreign key") ||
      error.message.includes("still referenced")
    ) {
      res
        .status(409)
        .json({
          error:
            "Serviço não pode ser excluído pois está vinculado a médicos ou consultas.",
        });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
}

export default { Listar, ListarDoctorsByService, Inserir, Editar, Excluir };
