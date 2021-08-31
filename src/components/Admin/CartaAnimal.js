import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { faTimes, faDotCircle } from "@fortawesome/free-solid-svg-icons";

export default function CartaAnimal({ id, imagen, nombre, estado }) {
	const sendData = () => {
		const form = document.getElementById("form-" + id);
		form.submit();
	};

	return (
		<div className="admin-animal-card col-12 col-md-6">
			<div className="img-card" style={{ backgroundImage: `url(${imagen})` }}></div>
			<div className="desc-card">
				<div className="body-card">
					<div className="info-card">
						<div className="name-prop">{nombre}</div>
						<div className="section-prop">
							<div>
								<span>Estado: </span>
								<p>{estado}</p>
							</div>
						</div>
					</div>
					<div className="crud-card">
						<form
							method="post"
							action="http://localhost:3001/Rasn/admin/animales/delete"
							className="btn-crud btn-delete"
							id={"form-" + id}
							title="eliminar"
						>
							<input type="hidden" name="id" value={id} />
							<FontAwesomeIcon icon={faTimes} onClick={sendData} />
							<p className="deleteP">borrar</p>
						</form>
						<Link to={`animales/nuevo-animal/${id}`} className="btn-crud btn-modify" title="editar">
							<FontAwesomeIcon icon={faDotCircle} />
							<p className="modifyP">modificar</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

CartaAnimal.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	status: PropTypes.string,
};
