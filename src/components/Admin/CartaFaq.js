import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componentes
import { faTimes, faDotCircle } from "@fortawesome/free-solid-svg-icons";

export default function CartaAnimal({ imagen }) {
	return (
		<div className="admin-animal-card col-12 col-md-6">
			<div className="faq-space">
				<div className="body-card">
					<div className="info-card">
						<div className="pregunta-faq-admin" title="Quiero ayudar como voluntario, ¿qué debo hacer?">
							Quiero ayudar como voluntario, ¿qué debo hacer?
						</div>
						<div className="respuesta-faq-admin">
							<span>
								Si querés formar parte de nuestro equipo, contactate con nosostros usan la opcion
								"Contacto Directo" de este sitio web o enviándonos un mensaje a nuestras redes sociales.
								Por favor informanos tu nombre y edad. Uno de los miembros de nuestro...
							</span>
						</div>
					</div>
					<div className="crud-card">
						<a href="/borrar" title="eliminar">
							<FontAwesomeIcon icon={faTimes} />
							<p className="deleteP">borrar</p>
						</a>
						<a href="/editar" title="editar">
							<FontAwesomeIcon icon={faDotCircle} />
							<p className="modifyP">modificar</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
