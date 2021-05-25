import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Persona from "../../../assets/Cat.jpg";
import Integrante from "../CartaIntegrante";

export default function Equipo() {
	return (
		<div className="row">
			<div className="item integrante new-member-container col-12 col-md-4 col-lg-3">
				<div className="new-member desc-card">
					<div className="new-content ">
						<div>
							<FontAwesomeIcon icon={faPlus} />
							Agregar miembro
						</div>
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
