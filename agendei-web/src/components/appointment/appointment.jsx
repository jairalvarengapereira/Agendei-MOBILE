function Appointment(props) {
  let dt = null;
  try {
    const dateStr = props.booking_date
      ? props.booking_date.toString().substring(0, 10)
      : null;
    dt =
      dateStr && props.booking_hour
        ? new Date(dateStr + "T" + props.booking_hour)
        : null;
  } catch (e) {
    dt = null;
  }

  const formattedDate = dt
    ? new Intl.DateTimeFormat("pt-BR", { dateStyle: "short" }).format(dt) + " - " + props.booking_hour + "h"
    : "Data não informada";

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(props.price || 0);

  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <div className="avatar-circle me-3">
            <i className="bi bi-person"></i>
          </div>
          {props.user}
        </div>
      </td>
      <td>
        <span className="badge bg-info-subtle text-info rounded-pill px-3 py-2">
          <i className="bi bi-doctor me-1"></i>
          {props.doctor}
        </span>
      </td>
      <td>
        <span className="text-secondary">
          <i className="bi bi-clipboard-pulse me-2"></i>
          {props.service}
        </span>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <i className="bi bi-calendar3 text-primary me-2"></i>
          {formattedDate}
        </div>
      </td>
      <td className="text-end">
        <span className="fw-bold text-success">
          {formattedPrice}
        </span>
      </td>
      <td className="text-end">
        <div className="btn-group" role="group">
          <button
            onClick={() => props.clickEdit(props.id_appointment)}
            className="btn btn-action btn-outline-primary"
            title="Editar"
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            onClick={() => props.clickDelete(props.id_appointment)}
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

export default Appointment;