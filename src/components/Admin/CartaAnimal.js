import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { faTimes, faDotCircle } from "@fortawesome/free-solid-svg-icons";

export default function CartaAnimal({ imagen }) {
	return (
		<div className="admin-animal-card col-12 col-md-6">
			<div className="img-card" style={{ backgroundImage: `url(${imagen})` }}></div>
			<div className="desc-card">
				<div className="body-card">
					<div className="info-card">
						<div className="name-prop">Miguel</div>
						<div className="section-prop">
							<div>
								<span>Sección: </span>
								<p>Rescatados</p>
							</div>
						</div>
					</div>
					<div className="crud-card">
						<a href="/borrar" title="eliminar">
							<FontAwesomeIcon icon={faTimes} />
							<p>borrar</p>
						</a>
						<a href="/editar">
							<FontAwesomeIcon icon={faDotCircle} />
							<p className="modifyP">modificar</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
