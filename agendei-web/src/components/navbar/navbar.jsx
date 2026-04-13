import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

function Navbar(){

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg"
    >
      <div className="container-fluid px-4">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/appointments">
          <img className="navbar-logo" src={logo} alt="" style={{ height: '40px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(8, 145, 178, 0.3)' }} />
          <span className="fw-bold">Agendei</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/appointments">
                <i className="bi bi-calendar-check me-1"></i>
                Agendamentos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/doctors">
                <i className="bi bi-person-badge me-1"></i>
                Médicos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services">
                <i className="bi bi-clipboard-pulse me-1"></i>
                Serviços
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/users">
                <i className="bi bi-people me-1"></i>
                Pacientes
              </Link>
            </li>

          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="btn-group">
                <button
                  className="btn dropdown-toggle d-flex align-items-center gap-2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle fs-5"></i>
                  {localStorage.getItem("sessionName")}
                </button>

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-shadow">
                  <li>
                    <Link className="dropdown-item d-flex align-items-center gap-2" to="/profile">
                      <i className="bi bi-person-gear"></i>
                      Meu Perfil
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <Link 
                      to="/" 
                      className="dropdown-item d-flex align-items-center gap-2 text-danger"
                      replace
                      onClick={(e) => {
                        localStorage.clear();
                      }}
                    >
                      <i className="bi bi-box-arrow-right"></i>
                      Desconectar
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;