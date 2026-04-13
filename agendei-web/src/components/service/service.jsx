function Service(props) {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <div className="service-icon me-3">
            <i className="bi bi-clipboard-pulse"></i>
          </div>
          <span className="fw-medium">{props.description}</span>
        </div>
      </td>
      <td className="text-end">
        <div className="btn-group" role="group">
          <button
            onClick={() => props.clickEdit(props.id_service)}
            className="btn btn-action btn-outline-primary"
            title="Editar"
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            onClick={() => props.clickDelete(props.id_service)}
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

export default Service;