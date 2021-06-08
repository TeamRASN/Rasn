import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Persona from "../../../assets/Cat.jpg";
import Integrante from "../CartaIntegrante";

export default function Equipo() {
	return (
		<div className="row">
			<div className="add-new-register col-12 col-sm-6 col-md-4 col-lg-3">
				<div className="new-register">
					<div className="new-content ">
						<FontAwesomeIcon icon={faPlus} />
						Agregar miembro
					</div>
				</div>
			</div>
			<Integrante persona={Persona} />
			<Integrante persona={Persona} />
			<Integrante persona={Persona} />
			<Integrante persona={Persona} />
		</div>
	);
}
