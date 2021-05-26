import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Portada from "../../../assets/Cat.jpg";
import Blog from "../CartaBlog";

export default function Equipo() {
	return (
		<div className="row">
			<div className="item new-card-container col-12 col-md-4 col-lg-3">
				<div className="new-member desc-card">
					<div className="new-content ">
						<div>
							<FontAwesomeIcon icon={faPlus} />
							Agregar blog
						</div>
					</div>
				</div>
			</div>
			<Blog portada={Portada} />
			<Blog portada={Portada} />
			<Blog portada={Portada} />
			<Blog portada={Portada} />
		</div>
	);
}
