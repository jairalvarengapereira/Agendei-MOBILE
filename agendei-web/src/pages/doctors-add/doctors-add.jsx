import "./doctors-add.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.jsx";
import api from "../../constantes/api.js";

function DoctorsAdd() {
  const { id_doctor } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState({ name: "", icon: "M" });
  const [specialtyPrincipal, setSpecialtyPrincipal] = useState("");
  const [allServices, setAllServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [loading, setLoading] = useState(true);

async function loadDoctor(id) {
  try {
    const response = await api.get(`/doctors/${id}`);
    if (response.data && response.data.length > 0) {
      const doctorData = response.data[0];
      setDoctor({
        name: doctorData.name,
        icon: doctorData.icon,
      });
      setSpecialtyPrincipal(String(doctorData.id_service_specialty) || "");
    }

    const servResponse = await api.get(`/doctors/${id}/services`);
    if (servResponse.data) {
      setSelectedServices(
        servResponse.data.map((s) => ({
          id_service: s.id_service,
          description: s.description,
          price: s.price,
        }))
      );
    }
  } catch (error) {
    console.error("Erro:", error.response?.data || error.message);
    alert(
      "Erro ao carregar médico: " +
        (error.response?.data?.error || error.message)
    );
  }
}

  async function loadAllServices() {
    try {
      const response = await api.get(`/services`);
      if (response.data) setAllServices(response.data);
    } catch (error) {
      alert("Erro ao listar serviços");
    }
  }

  function addService(id_service) {
    if (!id_service) return;
    const alreadyAdded = selectedServices.find(
      (s) => s.id_service === parseInt(id_service)
    );
    if (alreadyAdded) return;
    const service = allServices.find(
      (s) => s.id_service === parseInt(id_service)
    );
    if (service) {
      setSelectedServices((prev) => [
        ...prev,
        {
          id_service: service.id_service,
          description: service.description,
          price: "",
        },
      ]);
    }
  }

  function removeService(id_service) {
    setSelectedServices((prev) =>
      prev.filter((s) => s.id_service !== id_service)
    );
    if (String(specialtyPrincipal) === String(id_service)) {
      setSpecialtyPrincipal("");
    }
  }

  function updatePrice(id_service, price) {
    setSelectedServices((prev) =>
      prev.map((s) =>
        s.id_service === id_service ? { ...s, price: price } : s
      )
    );
  }

  async function saveDoctor() {
    try {
      if (!doctor.name.trim()) {
        alert("O nome do médico é obrigatório.");
        return;
      }
      if (!specialtyPrincipal) {
        alert("Selecione a especialidade principal.");
        return;
      }

      const json = {
        name: doctor.name,
        specialty: parseInt(specialtyPrincipal),
        icon: doctor.icon,
        services: selectedServices.map((s) => ({
          id_service: s.id_service,
          price: parseFloat(s.price) || 0,
        })),
      };

      const response = id_doctor
        ? await api.put(`/doctors/${id_doctor}`, json)
        : await api.post("/doctors", json);

      if (response.status === 200 || response.status === 201) {
        navigate("/doctors");
      }
    } catch (error) {
      alert("Erro ao salvar médico.");
    }
  }

  useEffect(() => {
    async function init() {
      await loadAllServices();
      if (id_doctor) {
        await loadDoctor(id_doctor);
      }
      setLoading(false);
    }
    init();
  }, [id_doctor]);

  if (loading)
    return (
      <div className="container-fluid mt-page">
        <Navbar />
        <p className="mt-5 ms-3">Carregando...</p>
      </div>
    );

  return (
    <>
      <Navbar />
      <div className="container-fluid mt-page">
        <div className="row col-lg-6 offset-lg-3">
          <div className="col-12 mt-2">
            <h2>{id_doctor ? "Editar Médico" : "Novo Médico"}</h2>
          </div>

          {/* Nome */}
          <div className="col-12 mt-4">
            <label className="form-label">Médico</label>
            <input
              type="text"
              className="form-control"
              value={doctor.name}
              onChange={(e) =>
                setDoctor((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Digite o nome do médico"
            />
          </div>

          {/* Adicionar serviços */}
          <div className="col-12 mt-4">
            <label className="form-label">Adicionar Serviços</label>
            <select
              className="form-select"
              onChange={(e) => addService(e.target.value)}
              value=""
            >
              <option value="">Selecione um serviço para adicionar</option>
              {allServices
                .filter(
                  (s) =>
                    !selectedServices.find(
                      (sel) => sel.id_service === s.id_service
                    )
                )
                .map((s) => (
                  <option key={s.id_service} value={s.id_service}>
                    {s.description}
                  </option>
                ))}
            </select>
          </div>

          {/* Lista de serviços selecionados */}
          {selectedServices.length > 0 && (
            <div className="col-12 mt-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Serviço</th>
                    <th>Preço (R$)</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {selectedServices.map((s) => (
                    <tr key={s.id_service}>
                      <td>{s.description}</td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          value={s.price}
                          onChange={(e) =>
                            updatePrice(s.id_service, e.target.value)
                          }
                          placeholder="0.00"
                          min="0"
                          step="0.01"
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => removeService(s.id_service)}
                          className="btn btn-danger btn-sm"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Especialidade principal */}
          <div className="col-12 mt-3">
            <label className="form-label">Especialidade Principal</label>
            <select
              className="form-select"
              value={specialtyPrincipal}
              onChange={(e) => setSpecialtyPrincipal(e.target.value)}
            >
              <option value="">Selecione a especialidade</option>
              {selectedServices.map((s) => (
                <option key={s.id_service} value={String(s.id_service)}>
                  {s.description}
                </option>
              ))}
            </select>
          </div>

          {/* Gênero */}
          <div className="col-12 mt-3">
            <label className="form-label">Gênero</label>
            <select
              className="form-select"
              value={doctor.icon}
              onChange={(e) =>
                setDoctor((prev) => ({ ...prev, icon: e.target.value }))
              }
            >
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </div>

          {/* Botões */}
          <div className="col-12 mt-4">
            <div className="d-flex justify-content-end gap-3">
              <Link to="/doctors" className="btn btn-outline-primary">
                Cancelar
              </Link>
              <button
                onClick={saveDoctor}
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

export default DoctorsAdd;
