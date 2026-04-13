import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../constantes/api.js";
import Navbar from "../../components/navbar/navbar.jsx";

function Profile(){

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("danger");

  useEffect(() => {
    setName(localStorage.getItem("sessionName") || "");
    setEmail(localStorage.getItem("sessionEmail") || "");
  }, []);

  async function saveProfile() {
    setMsg("");

    if (password && password !== password2) {
      setMsg("Senhas não conferem.");
      setMsgType("danger");
      return;
    }

    try {
      const id_admin = localStorage.getItem("sessionId");

      const payload = { name, email };
      if (password) payload.password = password;

      const response = await api.put("/admin/profile/" + id_admin, payload);

      if (response.data) {
        localStorage.setItem("sessionName", name);
        localStorage.setItem("sessionEmail", email);
        setMsg("Perfil atualizado com sucesso!");
        setMsgType("success");
        setPassword("");
        setPassword2("");
      }

    } catch (error) {
      if (error.response?.data?.error)
        setMsg(error.response.data.error);
      else
        setMsg("Erro ao atualizar perfil. Tente mais tarde.");
      setMsgType("danger");
    }
  }

  return <div className="container-fluid mt-page">
    <Navbar />

    <div className="row justify-content-center mt-5">
      <div className="col-sm-5">

        <h2 className="mb-4">Meu Perfil</h2>

        <div className="card p-4 shadow-sm">

          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">E-mail</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Nova Senha <span className="text-secondary">(deixe em branco para não alterar)</span></label>
            <input
              type="password"
              className="form-control"
              value={password}
              placeholder="Nova senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Confirmar Nova Senha</label>
            <input
              type="password"
              className="form-control"
              value={password2}
              placeholder="Confirmar nova senha"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>

          {msg.length > 0 &&
            <div className={`alert alert-${msgType}`} role="alert">
              {msg}
            </div>
          }

          <div className="d-flex justify-content-between">
            <Link to="/appointments" className="btn btn-outline-secondary">
              Cancelar
            </Link>
            <button onClick={saveProfile} className="btn btn-primary" type="button">
              Salvar alterações
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
}

export default Profile;
