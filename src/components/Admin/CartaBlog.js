import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function CartaBlog({ title, image, description }) {
	return (
		<div className="new-card-container col-12 col-sm-6 col-md-4 col-lg-3">
			<div className="blog-card">
				<div className="img-container">
					<div className="layer"></div>
					<div className="blog-img" style={{ backgroundImage: `url(${image})` }}></div>
					<a href="/" className="delete-btn">
						<FontAwesomeIcon icon={faTimes} />
					</a>
				</div>
				<div className="blog-content">
					<div className="blog-desc">
						<h5>{title}</h5>
						<p className="name">{description}</p>
					</div>
					<div className="modify-container">
						<a href="/">Modificar</a>
					</div>
				</div>
			</div>
		</div>
	);
}

CartaBlog.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	description: PropTypes.string,
};
