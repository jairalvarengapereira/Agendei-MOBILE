import "./doctors.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import Navbar from "../../components/navbar/navbar.jsx";
import api from "../../constantes/api.js";
import Doctor from "../../components/doctor/doctor.jsx";

function Doctors() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [idDoctor, setIdDoctor] = useState("");

  function clickEdit(id_doctor) {
    navigate("/doctors/edit/" + id_doctor);
  }

  function clickDelete(id_doctor) {
    confirmAlert({
      title: "Exclusão",
      message: `Deseja mesmo excluir esse médico?`,
      buttons: [
        {
          label: "Sim",
          onClick: () => DeleteDoctors(id_doctor)
        },
        {
          label: "Não",
          onClick: () => {}
        }
      ]
    });
  }

  async function LoadDoctors() {
    try {
      const response = await api.get('/doctors');
      
      if (response.data) {
        setDoctors(response.data);
      }      
    } catch (error) {
      if (error.response?.data.error) {
        if (error.response.status === 401) {
          navigate("/");
        }
      } else {
        alert("Erro ao listar médicos.");
      }
    }
  }

async function DeleteDoctors(id) {
  try {
    await api.delete("/doctors/" + id);
    setDoctors(doctors.filter((doc) => doc.id_doctor !== id));
  } catch (error) {
    if (error.response?.status === 401) {
      navigate("/");
    } else if (error.response?.status === 409) {
      alert(
        "Este médico não pode ser excluído pois possui serviços ou consultas vinculadas. Remova os vínculos antes de excluir."
      );
    } else {
      alert("Erro ao excluir médico. Tente novamente mais tarde.");
    }
  }
}

  function changeDoctor(e) {
    setIdDoctor(e.target.value);
  }

  useEffect(() => {
    LoadDoctors(); 
  }, [idDoctor]);

  return (
    <div className="container-fluid mt-page">
      <Navbar />

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex flex-column">
          <h2 className="mb-3">Médicos</h2>
          <Link to="/doctors/add" className="btn btn-primary mt-2">
            <i className="bi bi-plus-lg me-2"></i>
            Novo Médico
          </Link>
        </div>

        <div className="filter-row">
          <select 
            name="doctor" 
            id="doctor" 
            value={idDoctor}
            onChange={changeDoctor}          
          >
            <option value="">Todos os médicos</option>
            {doctors.map((doc) => (
              <option key={doc.id_doctor} value={doc.id_doctor}>
                {doc.name}
              </option>
            ))}
          </select>

          <button onClick={LoadDoctors} className="filter-btn" type="submit">
            <i className="bi bi-funnel me-1"></i>
            Filtrar
          </button>
        </div>
      </div>

      <div className="card p-0">
        <table className="table table-hover mb-0">
          <thead className="bold">
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Especialidade Principal</th>
              <th scope="col" className="col-buttons"></th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doc) => (
              <Doctor 
                key={doc.id_doctor}
                id_doctor={doc.id_doctor} // Passe o id_doctor aqui
                doctor={doc.name}
                specialty={doc.specialty}
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

export default Doctors;
