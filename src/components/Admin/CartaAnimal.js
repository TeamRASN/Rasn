import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { faTimes, faDotCircle } from "@fortawesome/free-solid-svg-icons";

export default function CartaAnimal({ id, image, name, status }) {
	return (
		<div className="admin-animal-card col-12 col-md-6">
			<div className="img-card" style={{ backgroundImage: `url(${image})` }}></div>
			<div className="desc-card">
				<div className="body-card">
					<div className="info-card">
						<div className="name-prop">{name}</div>
						<div className="section-prop">
							<div>
								<span>Estado: </span>
								<p>{status}</p>
							</div>
						</div>
					</div>
					<div className="crud-card">
						<a href="/borrar" className="btn-crud btn-delete" title="eliminar">
							<FontAwesomeIcon icon={faTimes} />
							<p className="deleteP">borrar</p>
						</a>
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
