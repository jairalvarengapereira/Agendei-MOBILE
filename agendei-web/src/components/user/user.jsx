function User(props) {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <div className="avatar-circle me-3">
            <i className="bi bi-person"></i>
          </div>
          <span className="fw-semibold">{props.user}</span>
        </div>
      </td>
      <td>
        <span className="text-secondary">
          <i className="bi bi-envelope me-2"></i>
          {props.email}
        </span>
      </td>
      <td>
        <span className="text-secondary">
          <i className="bi bi-telephone me-2"></i>
          {props.fone}
        </span>
      </td>
      <td>{props.cep}</td>
      <td>{props.logr}</td>
      <td>{props.num}</td>
      <td>{props.compl}</td>
      <td>{props.bairro}</td>
      <td>{props.cidade}</td>
      <td>
        <span className="badge bg-primary-subtle text-primary rounded-pill px-2">
          {props.uf}
        </span>
      </td>
      <td className="text-end">
        <div className="btn-group" role="group">
          <button
            onClick={() => props.clickEdit(props.id_user)}
            className="btn btn-action btn-outline-primary"
            title="Editar"
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            onClick={() => props.clickDelete(props.id_user)}
            className="btn btn-action btn-outline-danger"
            title="Excluir"
          >
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default User;