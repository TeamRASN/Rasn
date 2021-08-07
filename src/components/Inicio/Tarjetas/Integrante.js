import React from "react";

//Componentes
import Persona from "../../../assets/Cat.jpg";

export default function Integrante() {
	return (
		<div className="item integrante">
			<div className="testimony-wrap text-center">
				<div className="user-img" style={{ backgroundImage: `url(${Persona})` }}></div>
				<div className="text">
					<p className="name">Nombre</p>
					<span className="position">Voluntario</span>
				</div>
			</div>
		</div>
	);
}
