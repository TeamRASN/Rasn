import React from "react";

//Componentes

//Estilos

export default function TrabajoCard({ icon }) {
	return (
		<div className="work-card col-md-4 p-5 py-4 text-center">
			<div className="icon d-flex justify-content-center align-items-center mb-3">
				<img src={icon} alt="" />
			</div>
			<div className="media-body">
				<h3 className="heading">Lorem</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus nulla ipsum ipsa.</p>
			</div>
		</div>
	);
}
