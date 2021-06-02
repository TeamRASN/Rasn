import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Portada from "../../../assets/Cat.jpg";
import Faq from "../CartaFaq";

export default function Equipo() {
	return (
		<div className="row">
			<div className="add-new-register-row add-new-register col-12">
				<div className="new-register">
					<div className="new-content">
						<div>
							<FontAwesomeIcon icon={faPlus} />
							Agregar pregunta
						</div>
					</div>
				</div>
			</div>
			<Faq portada={Portada} />
			<Faq portada={Portada} />
			<Faq portada={Portada} />
			<Faq portada={Portada} />
		</div>
	);
}
