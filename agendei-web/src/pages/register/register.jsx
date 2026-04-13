import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { useState } from "react";
import api from "../../constantes/api.js";

function Register(){

  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [msg, setMsg] = useState("");

  async function executeAccount() {
    setMsg("");

    if (password !== password2){
      setMsg("Senhas não conferem.");
      return;
    }

    try {
      const response = await api.post("/admin/register", {
        name,
        email,
        password,
      });

      if (response.data){
        localStorage.setItem("sessionToken", response.data.token);
        localStorage.setItem("sessionId", response.data.id_admin);
        localStorage.setItem("sessionEmail", response.data.email);
        localStorage.setItem("sessionName", response.data.name);

        api.defaults.headers.common['Autorization'] = "Bearer " + response.data.token;

        navigate("/appointments");
      } else {
        setMsg("Erro ao criar conta. Tente mais tarde.");
      }

    } catch (error) {
      if(error.response?.data.error)
        setMsg(error.response.data.error);
      else
        setMsg("Erro ao criar conta. Tente mais tarde.");
    }
  }

  return <div className="row g-0">
    <div className="col-lg-5">
      <form className="p-4 p-lg-5">
        <div className="d-flex justify-content-center mb-4">
          <img src={logo} className="logo" alt="Logo" />
        </div>
        
        <h5 className="text-center mb-1">Crie sua conta agora mesmo.</h5>
        <h5 className="text-secondary text-center mb-4">Preencha os campos abaixo</h5>

        <div className="mt-3">
          <input 
            type="text" 
            placeholder="Nome completo" 
            required 
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <input 
            type="email" 
            placeholder="E-mail" 
            required 
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <input 
            type="password" 
            placeholder="Senha" 
            required 
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <input 
            type="password" 
            placeholder="Confirmar senha" 
            required 
            className="form-control"
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>

        <div className="mt-4 mb-4">
          <button onClick={executeAccount} className="btn-register" type="button">
            <i className="bi bi-person-plus me-2"></i>
            Criar minha conta
          </button>
        </div>

        {msg.length > 0 && 
          <div className="alert alert-danger" role="alert">
            {msg}
          </div>
        }

        <div className="text-center">
          <span className="text-secondary">Já tenho conta. </span> 
          <Link to="/" className="text-decoration-none fw-semibold" style={{ color: '#0891b2' }}> Acessar agora!</Link>
        </div>
      </form>
    </div>

    <div className="col-lg-7">
      <div className="background-login">
        <div className="background-login-content">
          <h2>Bem-vindo ao Agendei</h2>
          <p>Uma plataforma moderna para gerenciar seus agendamentos de consultas médicas de forma simples e eficiente.</p>
          <div className="mt-4 d-flex gap-3 justify-content-center">
            <span className="badge bg-white bg-opacity-25 px-4 py-2 rounded-pill">
              <i className="bi bi-calendar-check me-2"></i>Agendamento fácil
            </span>
            <span className="badge bg-white bg-opacity-25 px-4 py-2 rounded-pill">
              <i className="bi bi-shield-check me-2"></i>Segurança
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Register;