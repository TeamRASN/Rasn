import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function CartaIntegrante({ portada }) {
	return (
		<div className="new-card-container col-12 col-md-4 col-lg-3">
			<div className="blog-card">
				<div className="img-container">
					<div className="layer"></div>
					<div className="blog-img" style={{ backgroundImage: `url(${portada})` }}></div>
					<a href="/" className="delete-btn">
						<FontAwesomeIcon icon={faTimes} />
					</a>
				</div>
				<div className="blog-content">
					<div className="blog-desc">
						<h4>Titulo</h4>
						<p className="name">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
					</div>
					<div className="modify-container">
						<a href="/">Modificar</a>
					</div>
				</div>
			</div>
		</div>
	);
}
