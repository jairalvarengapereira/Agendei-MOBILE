import "./users.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import Navbar from "../../components/navbar/navbar.jsx";
import api from "../../constantes/api.js";
import User from "../../components/user/user.jsx";

function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [idUser, setIdUser] = useState("");

  function clickEdit(id_user) {
    navigate("/users/edit/" + id_user);
  }

  function clickDelete(id_user) {
    confirmAlert({
      title: "Exclusão",
      message: `Deseja mesmo excluir esse médico?`,
      buttons: [
        {
          label: "Sim",
          onClick: () => deleteUser(id_user)
        },
        {
          label: "Não",
          onClick: () => {}
        }
      ]
    });
  }

  async function loadUsers() {
    try {
      const response = await api.get('/admin/users');
      if (response.data) {
        setUsers(response.data);
      }      
    } catch (error) {
      if (error.response?.data.error) {
        if (error.response.status === 401) {
          navigate("/");
        }
      } else {
        alert("Erro ao listar pacientes.");
      }
    }
  }

  async function deleteUser(id) {
    try {
      await api.delete('/users/' + id);
      // Atualiza a lista de pacientes removendo o paciente excluído
      // setUsers(users.filter(user => user.id_user !== id));
      setUsers((prevUsers) => prevUsers.filter(user => user.id_user !== id));      
    } catch (error) {
      if (error.response?.data.error) {
        if (error.response.status === 401) {
          navigate("/users");
        }
      } else {
        alert("Erro ao excluir dados.");
      }
    }
  }

  function changeUser(e) {
    setIdUser(e.target.value);
  }

  useEffect(() => {
    loadUsers(); 
  }, [idUser]);

  return (
    <div className="container-fluid mt-page">
      <Navbar />

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex flex-column">
          <h2 className="mb-3">Pacientes</h2>
          <Link to="/users/add" className="btn btn-primary mt-2">
            <i className="bi bi-plus-lg me-2"></i>
            Novo Paciente
          </Link>
        </div>

        <div className="filter-row">
          <select 
            name="user" 
            id="user" 
            value={idUser}
            onChange={changeUser}          
          >
            <option value="">Todos os pacientes</option>
            {users.map((user) => (
              <option key={user.id_user} value={user.id_user}>
                {user.name}
              </option>
            ))}
          </select>

          <button onClick={loadUsers} className="filter-btn" type="submit">
            <i className="bi bi-funnel me-1"></i>
            Filtrar
          </button>
        </div>
      </div>

      <div className="card p-0">
        <div style={{ overflowX: 'auto' }}>
          <table className="table table-hover mb-0">
            <thead className="bold">
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Telefone</th>
                <th scope="col">CEP</th>
                <th scope="col">Endereço</th>
                <th scope="col">Num.</th>
                <th scope="col">Complemento</th>
                <th scope="col">Bairro</th>
                <th scope="col">Cidade</th>
                <th scope="col">UF</th>
                <th scope="col" className="col-buttons"></th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <User 
                  key={user.id_user}
                  id_user={user.id_user} // Passe o id_user aqui
                user={user.name}
                email={user.email}
                fone={user.fone}
                cep={user.cep}
                logr={user.logr}
                num={user.num}
                compl={user.compl}
                bairro={user.bairro}
                cidade={user.cidade}
                uf={user.uf}
                clickEdit={clickEdit}
                clickDelete={clickDelete}
              />
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
