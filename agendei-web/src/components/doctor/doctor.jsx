function Doctor(props) {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <div className="avatar-circle me-3">
            <i className="bi bi-person"></i>
          </div>
          <span className="fw-semibold">{props.doctor}</span>
        </div>
      </td>
      <td>
        <span className="badge bg-secondary-subtle text-secondary rounded-pill px-3 py-2">
          <i className="bi bi-briefcase me-1"></i>
          {props.specialty}
        </span>
      </td>
      <td className="text-end">
        <div className="btn-group" role="group">
          <button
            onClick={() => props.clickEdit(props.id_doctor)}
            className="btn btn-action btn-outline-primary"
            title="Editar"
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            onClick={() => props.clickDelete(props.id_doctor)}
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

export default Doctor;