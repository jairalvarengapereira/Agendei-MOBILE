import "./services-add.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.jsx";
import api from "../../constantes/api.js";

function ServicesAdd() {
  const { id_service } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState({ description: "" });

  async function loadService(id) {
    try {
      const response = await api.get(`/services`);
      if (response.data) {
        const found = response.data.find(
          (s) => s.id_service === parseInt(id)
        );
        if (found) {
          setService(found);
        }
      }
    } catch (error) {
      alert("Erro ao carregar serviço.");
    }
  }

  async function saveService() {
    try {
      if (!service.description.trim()) {
        alert("A descrição do serviço é obrigatória.");
        return;
      }

      const json = { description: service.description };

      const response = id_service
        ? await api.put(`/services/${id_service}`, json)
        : await api.post("/services", json);

      if (response.status === 200 || response.status === 201) {
        navigate("/services");
      }
    } catch (error) {
      alert("Erro ao salvar serviço. Tente novamente.");
    }
  }

  useEffect(() => {
    if (id_service) {
      loadService(id_service);
    }
  }, [id_service]);

  return (
    <>
      <Navbar />
      <div className="container-fluid mt-page">
        <div className="row col-lg-4 offset-lg-4">
          <div className="col-12 mt-2">
            <h2>{id_service ? "Editar Serviço" : "Novo Serviço"}</h2>
          </div>

          <div className="col-12 mt-4">
            <label htmlFor="description" className="form-label">
              Descrição
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
              value={service.description}
              onChange={(e) =>
                setService((prev) => ({ ...prev, description: e.target.value }))
              }
              placeholder="Digite a descrição do serviço"
            />
          </div>

          <div className="col-12 mt-4">
            <div className="d-flex justify-content-end gap-3">
              <Link to="/services" className="btn btn-outline-primary">
                Cancelar
              </Link>
              <button
                onClick={saveService}
                type="button"
                className="btn btn-primary"
              >
                Salvar Dados
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesAdd;
