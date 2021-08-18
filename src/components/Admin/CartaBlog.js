import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function CartaBlog({ id, titulo, imagen, descripcion }) {
	return (
		<div className="new-card-container col-12 col-sm-6 col-md-4 col-lg-3">
			<div className="blog-card">
				<div className="img-container">
					<div className="layer"></div>
					<div className="blog-img" style={{ backgroundImage: `url(${imagen})` }}></div>
					<a href="/" className="delete-btn">
						<FontAwesomeIcon icon={faTimes} />
					</a>
				</div>
				<div className="blog-content">
					<div className="blog-desc">
						<h5>{titulo}</h5>
						<p className="name">{descripcion}</p>
					</div>
					<div className="modify-container">
						<Link to={`blogs/nuevo-post/${id}`} className="btn-modify">Modificar</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

CartaBlog.propTypes = {
	titulo: PropTypes.string,
	imagen: PropTypes.string,
	descripcion: PropTypes.string,
};
