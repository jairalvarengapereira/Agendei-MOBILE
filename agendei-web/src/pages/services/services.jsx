import "./services.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Navbar from "../../components/navbar/navbar.jsx";
import api from "../../constantes/api.js";
import Service from "../../components/service/service.jsx";

function Services() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  async function LoadServices() {
    try {
      const response = await api.get("/services");
      if (response.data) {
        setServices(response.data);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        navigate("/");
      } else {
        alert("Erro ao listar serviços.");
      }
    }
  }

  function clickEdit(id_service) {
    navigate("/services/edit/" + id_service);
  }

  function clickDelete(id_service) {
    confirmAlert({
      title: "Exclusão",
      message: "Deseja mesmo excluir esse serviço?",
      buttons: [
        { label: "Sim", onClick: () => DeleteService(id_service) },
        { label: "Não", onClick: () => {} },
      ],
    });
  }

  async function DeleteService(id) {
    try {
      await api.delete("/services/" + id);
      setServices(services.filter((s) => s.id_service !== id));
    } catch (error) {
      if (error.response?.status === 401) {
        navigate("/");
      } else if (error.response?.status === 409) {
        alert(
          "Este serviço não pode ser excluído pois está vinculado a médicos ou consultas."
        );
      } else {
        alert("Erro ao excluir serviço. Tente novamente mais tarde.");
      }
    }
  }

  useEffect(() => {
    LoadServices();
  }, []);

  return (
    <div className="container-fluid mt-page">
      <Navbar />
      
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex flex-column">
          <h2 className="mb-3">Serviços</h2>
          <Link to="/services/add" className="btn btn-primary mt-2">
            <i className="bi bi-plus-lg me-2"></i>
            Novo Serviço
          </Link>
        </div>
      </div>
      
      <div className="card p-0">
        <table className="table table-hover mb-0">
          <thead className="bold">
            <tr>
              <th scope="col">Descrição</th>
              <th scope="col" className="col-buttons"></th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <Service
                key={s.id_service}
                id_service={s.id_service}
                description={s.description}
                clickEdit={clickEdit}
                clickDelete={clickDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Services;
