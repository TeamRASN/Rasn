import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// Componentes
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Portada from "../../../assets/Cat.jpg";
import Blog from "../CartaBlog";

export default function Equipo() {
	return (
		<div className="row">
			<Link
				to="blogs/nuevo-post"
				className="add-new-register item new-card-container col-12 col-sm-6 col-md-4 col-lg-3"
			>
				<div className="new-register">
					<div className="new-content ">
						<div>
							<FontAwesomeIcon icon={faPlus} />
							Agregar blog
						</div>
					</div>
				</div>
			</Link>
			<Blog portada={Portada} />
			<Blog portada={Portada} />
			<Blog portada={Portada} />
			<Blog portada={Portada} />
		</div>
	);
}
