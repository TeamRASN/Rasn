import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { faTimes, faDotCircle } from "@fortawesome/free-solid-svg-icons";

export default function CartaFaq({ id, pregunta, respuesta }) {
	return (
		<div className="admin-animal-card col-12 col-md-6">
			<div className="faq-space">
				<div className="body-card">
					<div className="info-card">
						<div className="pregunta-faq-admin" title="Quiero ayudar como voluntario, ¿qué debo hacer?">
							{pregunta}
						</div>
						<div className="respuesta-faq-admin">
							<span>{respuesta}</span>
						</div>
					</div>
					<div className="crud-card">
						<a href="/borrar" className="btn-crud btn-delete" title="eliminar">
							<FontAwesomeIcon icon={faTimes} />
							<p className="deleteP">borrar</p>
						</a>
						<Link to={`faq/nueva-pregunta/${id}`} className="btn-crud btn-modify" title="editar">
							<FontAwesomeIcon icon={faDotCircle} />
							<p className="modifyP">modificar</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

CartaFaq.propTypes = {
	pregunta: PropTypes.string,
	respuesta: PropTypes.string,
};
