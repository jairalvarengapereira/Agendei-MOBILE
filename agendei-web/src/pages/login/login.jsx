import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/Logo.png";
import api from "../../constantes/api.js";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function executeLogin() {
    setMsg("");
    try {
      const response = await api.post("/admin/login", {
        email,
        password,
      });

      if (response.data) {
        localStorage.setItem("sessionToken", response.data.token);
        localStorage.setItem("sessionId", response.data.id_admin);
        localStorage.setItem("sessionEmail", response.data.email);
        localStorage.setItem("sessionName", response.data.name);

        api.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;

        navigate("/appointments");
      } else {
        setMsg("Erro ao fazer login. Tente mais tarde.");
      }
    } catch (error) {
      if (error.response?.data.error) setMsg(error.response.data.error);
      else setMsg("Erro ao fazer login. Tente mais tarde.");
    }
  }

  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 50%, #fefce8 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{ 
        background: 'white', 
        padding: '40px', 
        borderRadius: '24px',
        maxWidth: '420px',
        width: '100%'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <img src={logo} style={{ width: '180px', borderRadius: '16px' }} alt="Logo" />
        </div>
        
        <h5 style={{ textAlign: 'center', color: '#1e293b', fontSize: '1.75rem', fontWeight: '800' }}>Bem-vindo de volta</h5>
        <p style={{ textAlign: 'center', color: '#64748b' }}>Gerencie seus agendamentos de forma descomplicada.</p>

        <div style={{ marginTop: '16px' }}>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0' }}
          />
        </div>

        <div style={{ marginTop: '12px' }}>
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0' }}
          />
        </div>

        <button
          onClick={executeLogin}
          style={{ 
            width: '100%', 
            marginTop: '16px',
            padding: '14px', 
            background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '9999px',
            fontWeight: '700',
            cursor: 'pointer'
          }}
        >
          <i className="bi bi-arrow-right-circle me-2"></i>
          Entrar
        </button>

        {msg.length > 0 && (
          <div style={{ padding: '12px', background: '#fee2e2', color: '#dc2626', borderRadius: '8px', marginTop: '16px' }}>
            {msg}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <span style={{ color: '#64748b' }}>Não tenho uma conta. </span>
          <Link to="/register" style={{ color: '#0891b2', fontWeight: '600' }}> Criar conta agora.</Link>
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #e2e8f0', color: '#94a3b8', fontSize: '0.75rem' }}>
          <p>© 2026 Jair Alvarenga Pereira.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;