import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios"

// Componentes
import { faTimes, faDotCircle } from "@fortawesome/free-solid-svg-icons";

export default function CartaFaq({ id, pregunta, respuesta, deleteFaq }) {
	const preventSubmit = (e) => {
		e.preventDefault();
		const confirmOperation = window.confirm(`Estás seguro que deseas eliminar esta pregunta?`);
		if (confirmOperation) {
			deleteFaq(id)
			Axios.post("http://localhost:3001/Rasn/admin/faq/delete", {
				id: id,
			}).then((res) => {
				console.log(res.data);
			});
		}
	};

	return (
		<div className="admin-animal-card col-12 col-md-6">
			<div className="faq-space">
				<div className="body-card">
					<div className="info-card">
						<div className="pregunta-faq-admin" title={pregunta}>
							{pregunta}
						</div>
						<div className="respuesta-faq-admin" title={respuesta}>
							<span>{respuesta}</span>
						</div>
					</div>
					<div className="crud-card">
						<form
							onSubmit={(e) => {
								preventSubmit(e);
							}}
							className="btn-crud btn-delete"
							title="eliminar"
						>
							<button type="submit">
								<FontAwesomeIcon icon={faTimes} />
							</button>
						</form>
						<Link
							to={`faq/nueva-pregunta/?id=${id}?pregunta=${pregunta}?respuesta=${respuesta}`}
							className="btn-crud btn-modify"
							title="editar"
						>
							<FontAwesomeIcon icon={faDotCircle} />
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
