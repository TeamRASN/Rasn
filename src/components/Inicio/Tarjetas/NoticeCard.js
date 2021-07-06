import React from "react";

// Componentes

// Estilos
import "../../../css/esfuerzos_donativos.css";

export default function Noticias({ banner, title, description }) {
	return (
		<div className="notice-card col-12 col-md-4 col-lg-3">
			<div className="notice-content">
				<div className="carta-img" style={{ backgroundImage: `url(${banner})` }}>
					<div className="overlay">
						<div className="overlay-content"></div>
					</div>
				</div>

				<div className="carta-content">
					<h2 className="notice-card-title">{title}</h2>
					<p className="notice-card-desc">{description}</p>
				</div>
			</div>
		</div>
	);
}
