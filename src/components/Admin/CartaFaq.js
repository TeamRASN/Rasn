import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { faTimes, faDotCircle } from "@fortawesome/free-solid-svg-icons";

export default function CartaFaq({ question, answer }) {
	return (
		<div className="admin-animal-card col-12 col-md-6">
			<div className="faq-space">
				<div className="body-card">
					<div className="info-card">
						<div className="pregunta-faq-admin" title="Quiero ayudar como voluntario, ¿qué debo hacer?">
							{question}
						</div>
						<div className="respuesta-faq-admin">
							<span>{answer}</span>
						</div>
					</div>
					<div className="crud-card">
						<a href="/borrar" title="eliminar">
							<FontAwesomeIcon icon={faTimes} />
							<p className="deleteP">borrar</p>
						</a>
						<a href="/editar" title="editar">
							<FontAwesomeIcon icon={faDotCircle} />
							<p className="modifyP">modificar</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

CartaFaq.propTypes = {
	question: PropTypes.string,
	answer: PropTypes.string,
};
