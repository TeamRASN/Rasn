import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// Componentes
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CartaFaq from "../CartaFaq";

//Objetos
const faqCards = [
	{
		id: 1,
		pregunta: "¿Dónde mantenemos a las mascotas?",
		respuesta: "Las mascotas se encuentran resguardadas en un refugio alquilado. Nuestro equipo de voluntarios se encarga de darles todos los cuidados necesarios, dando de su tiempo para visitar el refugio y asegurarse de que todo esté bien.",
	},
	{
		id: 2,
		pregunta: "Quiero adoptar a una de las mascotas. ¿Qué debo hacer?",
		respuesta: 'Si quieres adoptar a una de las mascotas, puedes contactarte con nosotros usando la opción "Contacto Directo" de este sitio web o enviándonos un mensaje a nuestras redes sociales, que también encontrarás en este sitio. Te responderemos a la brevedad para que tengas toda la información sobre la mascota.',
	},
	{
		id: 3,
		pregunta: "Quiero ayudar como voluntario. ¿Qué debo hacer?",
		respuesta: 'Si quieres formar parte de nuestro equipo, contáctate con nosotros usando la opción "Contacto Directo" de este sitio web o enviándonos un mensaje a nuestras redes sociales. Por favor infórmanos tu nombre y edad. Uno de los miembros de nuestro equipo se contactará con vos para acordar un horario en que puedas colaborar.',
	},
];

export default function Equipo() {
	return (
		<div className="row">
			<Link to="faq/nueva-pregunta" className="add-new-register-row add-new-register col-12">
				<div className="new-register">
					<div className="new-content">
						<div>
							<FontAwesomeIcon icon={faPlus} />
							Agregar pregunta
						</div>
					</div>
				</div>
			</Link>
			{faqCards.map(({ id, pregunta, respuesta }) => (
				<CartaFaq pregunta={pregunta} respuesta={respuesta} key={id} id={id} />
			))}
		</div>
	);
}
